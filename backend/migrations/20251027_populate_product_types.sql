-- Migration: populate common products.type values for category 2 (Giỏ quà) and 3 (Hoa tươi)
-- Created: 2025-10-27
-- IMPORTANT: This file contains SELECT preview queries followed by safe UPDATE statements.
-- Run the SELECT blocks first, review results, then run the UPDATE blocks. Make a backup before applying.

-- Example backup (run from shell):
-- mysqldump -u <user> -p <database_name> products > backup_products.sql

START TRANSACTION;

-- Preview all products in the target categories that have empty/NULL type
SELECT product_id, name, category_id, type, image_url
FROM products
WHERE category_id IN (2,3)
  AND (type IS NULL OR type = '')
ORDER BY category_id, product_id;

-- -----------------------------
-- Matches for "kệ" (kệ viếng / kệ chúc mừng)
-- Preview rows that look like kệ viếng
SELECT product_id, name, category_id, type
FROM products
WHERE category_id IN (2,3)
  AND (type IS NULL OR type = '')
  AND (
    LOWER(name) LIKE '%kệ%viếng%'
    OR LOWER(name) LIKE '%ke%vieng%'
    OR LOWER(name) LIKE '%kệ%viếng%'
  )
ORDER BY product_id;

-- If preview looks good, uncomment to set 'ke-vieng'
-- UPDATE products
-- SET type = 'ke-vieng'
-- WHERE category_id IN (2,3)
--   AND (type IS NULL OR type = '')
--   AND (
--     LOWER(name) LIKE '%kệ%viếng%'
--     OR LOWER(name) LIKE '%ke%vieng%'
--     OR LOWER(name) LIKE '%kệ%viếng%'
--   );

-- -----------------------------
-- Matches for "giỏ" + "viếng" (giỏ viếng)
SELECT product_id, name, category_id, type
FROM products
WHERE category_id IN (2,3)
  AND (type IS NULL OR type = '')
  AND (
    LOWER(name) LIKE '%giỏ%viếng%'
    OR LOWER(name) LIKE '%gio%vieng%'
    OR LOWER(name) LIKE '%giỏ%viếng%'
  )
ORDER BY product_id;

-- If preview looks good, uncomment to set 'gio-vieng'
-- UPDATE products
-- SET type = 'gio-vieng'
-- WHERE category_id IN (2,3)
--   AND (type IS NULL OR type = '')
--   AND (
--     LOWER(name) LIKE '%giỏ%viếng%'
--     OR LOWER(name) LIKE '%gio%vieng%'
--     OR LOWER(name) LIKE '%giỏ%viếng%'
--   );

-- -----------------------------
-- Matches for "bó" / "bo" + "viếng" (bó viếng)
SELECT product_id, name, category_id, type
FROM products
WHERE category_id IN (2,3)
  AND (type IS NULL OR type = '')
  AND (
    LOWER(name) LIKE '%bó%viếng%'
    OR LOWER(name) LIKE '%bo%vieng%'
  )
ORDER BY product_id;

-- If preview looks good, uncomment to set 'bo-vieng'
-- UPDATE products
-- SET type = 'bo-vieng'
-- WHERE category_id IN (2,3)
--   AND (type IS NULL OR type = '')
--   AND (
--     LOWER(name) LIKE '%bó%viếng%'
--     OR LOWER(name) LIKE '%bo%vieng%'
--   );

-- -----------------------------
-- Matches for "chúc mừng" / "chuc mung" patterns
SELECT product_id, name, category_id, type
FROM products
WHERE category_id IN (2,3)
  AND (type IS NULL OR type = '')
  AND (
    LOWER(name) LIKE '%chúc mừng%'
    OR LOWER(name) LIKE '%chuc mung%'
  )
ORDER BY product_id;

-- If preview looks good, uncomment one of the updates below depending on whether
-- the product is a kệ (stand) or bó/giỏ. Example for 'ke-chuc-mung' and 'bo-chuc-mung'
-- UPDATE products
-- SET type = 'ke-chuc-mung'
-- WHERE category_id IN (2,3)
--   AND (type IS NULL OR type = '')
--   AND LOWER(name) LIKE '%kệ%chúc mừng%';

-- UPDATE products
-- SET type = 'bo-chuc-mung'
-- WHERE category_id IN (2,3)
--   AND (type IS NULL OR type = '')
--   AND (LOWER(name) LIKE '%bó%chúc mừng%' OR LOWER(name) LIKE '%bo%chuc%mung%');

-- -----------------------------
-- Matches for 'sinh nhật' -> 'sinh-nhat'
SELECT product_id, name, category_id, type
FROM products
WHERE category_id IN (2,3)
  AND (type IS NULL OR type = '')
  AND (
    LOWER(name) LIKE '%sinh nhậ%' 
    OR LOWER(name) LIKE '%sinh-nhat%'
    OR LOWER(name) LIKE '%sinh nhat%'
  )
ORDER BY product_id;

-- If preview looks good, uncomment to set 'sinh-nhat'
-- UPDATE products
-- SET type = 'sinh-nhat'
-- WHERE category_id IN (2,3)
--   AND (type IS NULL OR type = '')
--   AND (
--     LOWER(name) LIKE '%sinh nhậ%'
--     OR LOWER(name) LIKE '%sinh-nhat%'
--     OR LOWER(name) LIKE '%sinh nhat%'
--   );

-- -----------------------------
-- Generic fallback: set a conservative sentinel 'unknown' for manual review
-- (ONLY run this if you want to mark every remaining empty type so they're visible)
-- SELECT count(*) FROM products WHERE category_id IN (2,3) AND (type IS NULL OR type = '');
-- UPDATE products
-- SET type = 'unknown'
-- WHERE category_id IN (2,3) AND (type IS NULL OR type = '');

COMMIT;

-- NOTES:
-- 1) The file intentionally leaves UPDATE statements commented out so you can inspect
--    preview SELECTs before making changes.
-- 2) If your MySQL collation is accent-sensitive, add appropriate patterns or use
--    functions to strip accents before matching.
-- 3) If you want me to generate a more aggressive SQL (uncommented) for bulk apply,
--    tell me and I'll prepare it, but I recommend reviewing previews first.
