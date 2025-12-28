// Lấy các sản phẩm nổi bật (mặc định: mới nhất, giới hạn 8)
exports.getFeatured = async (req, res, next) => {
  try {
    const limit = parseInt(req.query.limit) || 8;
    const [rows] = await pool.query(`
      SELECT p.*, p.image_url, c.name as category_name, s.name as supplier_name 
      FROM products p 
      LEFT JOIN categories c ON p.category_id = c.category_id 
      LEFT JOIN suppliers s ON p.supplier_id = s.supplier_id
      ORDER BY p.created_at DESC
      LIMIT ?
    `, [limit]);
    res.json(rows);
  } catch (err) { next(err); }
};
// backend/controllers/productController.js
const pool = require('../config/db');

exports.getAll = async (req, res, next) => {
  try {
    // Support server-side filtering by category and type to avoid client-side mismatches
    const { category, type } = req.query || {};

    const conditions = [];
    const params = [];

    if (category) {
      conditions.push('p.category_id = ?');
      params.push(Number(category));
    }

    // If type is provided, try exact match on `type`, fuzzy LIKE on `type`,
    // and a token-based name match as a fallback (all tokens must appear in name).
    if (type) {
      const raw = String(type).toLowerCase();
      const tokens = raw.split(/[-_\s]+/).map(t => t.trim()).filter(Boolean);

      const typeConditions = [];
      // exact match
      typeConditions.push('LOWER(p.type) = ?');
      params.push(raw);
      // partial match on type
      typeConditions.push('LOWER(p.type) LIKE ?');
      params.push('%' + raw + '%');

      // tokenized name matches (require all tokens present)
      if (tokens.length > 0) {
        const nameLikeConds = tokens.map(() => 'LOWER(p.name) LIKE ?').join(' AND ');
        typeConditions.push('(' + nameLikeConds + ')');
        tokens.forEach(t => params.push('%' + t + '%'));
      }

      conditions.push('(' + typeConditions.join(' OR ') + ')');
    }

    const where = conditions.length ? ('WHERE ' + conditions.join(' AND ')) : '';

    const sql = `
      SELECT p.*, c.name as category_name
      FROM products p
      LEFT JOIN categories c ON p.category_id = c.category_id
      ${where}
      ORDER BY p.created_at DESC
    `;

    const [rows] = await pool.query(sql, params);
    res.json(rows);
  } catch (err) { next(err); }
};

exports.getById = async (req, res, next) => {
  try {
    const id = req.params.id;
    const [rows] = await pool.query('SELECT * FROM products WHERE product_id = ?', [id]);
    if (!rows.length) return res.status(404).json({ message: 'Không tìm thấy sản phẩm' });
    res.json(rows[0]);
  } catch (err) { next(err); }
};

exports.create = async (req, res, next) => {
  try {
    const { category_id, supplier_id, name, price, stock, description, image_url } = req.body;
    const [result] = await pool.query(
      'INSERT INTO products (category_id, supplier_id, name, price, stock, description, image_url) VALUES (?, ?, ?, ?, ?, ?, ?)',
      [category_id || null, supplier_id || null, name, price, stock || 0, description || null, image_url || null]
    );
    res.json({ message: 'Thêm thành công', product_id: result.insertId });
  } catch (err) { next(err); }
};

exports.update = async (req, res, next) => {
  try {
    const id = req.params.id;
    const { category_id, supplier_id, name, price, stock, description, image_url } = req.body;
    await pool.query(
      'UPDATE products SET category_id=?, supplier_id=?, name=?, price=?, stock=?, description=?, image_url=? WHERE product_id=?',
      [category_id || null, supplier_id || null, name, price, stock || 0, description || null, image_url || null, id]
    );
    res.json({ message: 'Cập nhật thành công' });
  } catch (err) { next(err); }
};


exports.delete = async (req, res, next) => {
  try {
    const id = Number(req.params.id); // Đảm bảo kiểu số
    // Xóa order_items liên quan trước
    await pool.query('DELETE FROM order_items WHERE product_id = ?', [id]);
    // Sau đó xóa sản phẩm
    await pool.query('DELETE FROM products WHERE product_id = ?', [id]);
    res.json({ message: 'Xóa thành công' });
  } catch (err) {
    console.error('Lỗi xóa sản phẩm:', err);
    next(err);
  }
};

// API: /products/stats
exports.getStats = async (req, res, next) => {
  try {
    // Tổng số sản phẩm
    const [totalRows] = await pool.query('SELECT COUNT(*) as total FROM products');
    // Sản phẩm sắp hết hàng (ví dụ: stock <= 5)
    const [lowStockRows] = await pool.query('SELECT COUNT(*) as lowStock FROM products WHERE stock <= 5');
    // Tổng số loại sản phẩm
    const [categoryRows] = await pool.query('SELECT COUNT(DISTINCT category_id) as categories FROM products');
    res.json({
      total: totalRows[0].total,
      lowStock: lowStockRows[0].lowStock,
      categories: categoryRows[0].categories
    });
  } catch (err) {
    next(err);
  }
};
