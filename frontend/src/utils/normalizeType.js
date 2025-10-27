// Utility to normalize 'type' query params and aliases to canonical slugs
const TYPE_ALIASES = {
  // Flowers
  'ke-kinh-vieng': 'ke-vieng',
  'ke-kinh-vieng': 'ke-vieng',
  'kệ-kinh-viếng': 'ke-vieng',
  'ke-chucmung': 'ke-chuc-mung',
  'kechucmung': 'ke-chuc-mung',
  'kệ-chúc-mừng': 'ke-chuc-mung',
  'bo-kinh-vieng': 'bo-vieng',
  'bovieng': 'bo-vieng',

  // Baskets aliases
  'gio-sinh-nhat': 'sinh-nhat',
  'gio-sinhnhat': 'sinh-nhat',
  'giosinhnhat': 'sinh-nhat',
  'ke-sinh-nhat': 'sinh-nhat',
  'ke-sinhnhat': 'sinh-nhat',
  'ke-sinhnhật': 'sinh-nhat',
};

function stripDiacritics(str) {
  // basic removal of Vietnamese diacritics for common cases
  return str
    .normalize('NFD')
    .replace(/\p{Diacritic}/gu, '')
    .replace(/đ/g, 'd')
    .replace(/Đ/g, 'D');
}

export function normalizeTypeParam(raw) {
  if (!raw) return '';
  const lowered = String(raw).toLowerCase().trim();
  const cleaned = stripDiacritics(lowered).replace(/[^a-z0-9\s-]/g, '').replace(/\s+/g, '-');
  if (TYPE_ALIASES[cleaned]) return TYPE_ALIASES[cleaned];
  return cleaned;
}

export default normalizeTypeParam;
