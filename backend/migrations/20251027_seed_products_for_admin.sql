-- Seed categories (insert if missing)
START TRANSACTION;

INSERT INTO categories (name, description)
SELECT 'Trái cây nhập khẩu', 'Trái cây nhập khẩu - nhập khẩu nước ngoài'
WHERE NOT EXISTS (SELECT 1 FROM categories WHERE name = 'Trái cây nhập khẩu');

INSERT INTO categories (name, description)
SELECT 'Trái cây Việt Nam', 'Trái cây Việt Nam - sản phẩm nội địa'
WHERE NOT EXISTS (SELECT 1 FROM categories WHERE name = 'Trái cây Việt Nam');

INSERT INTO categories (name, description)
SELECT 'Giỏ trái', 'Giỏ quà - giỏ trái cây'
WHERE NOT EXISTS (SELECT 1 FROM categories WHERE name = 'Giỏ trái');

INSERT INTO categories (name, description)
SELECT 'Hoa tươi', 'Hoa tươi - bó hoa, chậu hoa'
WHERE NOT EXISTS (SELECT 1 FROM categories WHERE name = 'Hoa tươi');

COMMIT;

-- Now insert sample products only if a product with the same name doesn't already exist
-- Use category_id lookup by name so this works regardless of the auto-increment ids

INSERT INTO products (category_id, supplier_id, name, price, description, stock, image_url)
SELECT (SELECT category_id FROM categories WHERE name = 'Trái cây nhập khẩu'), 1, 'Táo Envy Mỹ', 189000, 'Táo Envy của Mỹ có vỏ màu đỏ đậm, thịt giòn ngọt đậm đà', 50, '/uploads/tao-envy.jpg'
WHERE NOT EXISTS (SELECT 1 FROM products WHERE name = 'Táo Envy Mỹ');

INSERT INTO products (category_id, supplier_id, name, price, description, stock, image_url)
SELECT (SELECT category_id FROM categories WHERE name = 'Trái cây nhập khẩu'), 1, 'Nho đỏ không hạt Úc', 245000, 'Nho đỏ không hạt Úc - Ngọt đậm, không hạt, được trồng tại Úc', 30, '/uploads/nho-do-uc.jpg'
WHERE NOT EXISTS (SELECT 1 FROM products WHERE name = 'Nho đỏ không hạt Úc');

INSERT INTO products (category_id, supplier_id, name, price, description, stock, image_url)
SELECT (SELECT category_id FROM categories WHERE name = 'Trái cây Việt Nam'), 1, 'Sầu riêng Ri6 Đăk Lăk', 165000, 'Sầu riêng Ri6 thượng hạng từ Đăk Lăk - Múi dày, hạt lép', 20, '/uploads/sau-rieng.jpg'
WHERE NOT EXISTS (SELECT 1 FROM products WHERE name = 'Sầu riêng Ri6 Đăk Lăk');

INSERT INTO products (category_id, supplier_id, name, price, description, stock, image_url)
SELECT (SELECT category_id FROM categories WHERE name = 'Giỏ trái'), 1, 'Giỏ trái cây thăm bệnh', 599000, 'Giỏ trái cây phù hợp thăm bệnh, thăm hỏi người thân', 10, '/uploads/gio-trai-cay-tham-benh.jpg'
WHERE NOT EXISTS (SELECT 1 FROM products WHERE name = 'Giỏ trái cây thăm bệnh');

INSERT INTO products (category_id, supplier_id, name, price, description, stock, image_url)
SELECT (SELECT category_id FROM categories WHERE name = 'Giỏ trái'), 1, 'Giỏ trái cây sang trọng', 999000, 'Giỏ trái cây cao cấp phù hợp biếu tặng sếp, đối tác', 8, '/uploads/gio-trai-cay-sang-trong.jpg'
WHERE NOT EXISTS (SELECT 1 FROM products WHERE name = 'Giỏ trái cây sang trọng');

INSERT INTO products (category_id, supplier_id, name, price, description, stock, image_url)
SELECT (SELECT category_id FROM categories WHERE name = 'Hoa tươi'), 1, 'Hoa hồng Ecuador', 950000, 'Bó hoa hồng Ecuador - Màu đỏ rực rỡ, cành dài 1m', 10, '/uploads/hoa-hong-ecuador.jpg'
WHERE NOT EXISTS (SELECT 1 FROM products WHERE name = 'Hoa hồng Ecuador');

-- End of seed file
