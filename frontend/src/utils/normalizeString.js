// normalizeString: strip diacritics, lower-case, collapse whitespace
export function normalizeString(str) {
  if (!str) return '';
  const s = String(str).toLowerCase().trim();
  // remove diacritics (basic Unicode normalization)
  const withoutDiacritics = s.normalize('NFD').replace(/\p{Diacritic}/gu, '').replace(/đ/g, 'd').replace(/Đ/g, 'D');
  // keep letters, numbers and spaces
  return withoutDiacritics.replace(/[^a-z0-9\s]/g, ' ').replace(/\s+/g, ' ').trim();
}

export default normalizeString;
