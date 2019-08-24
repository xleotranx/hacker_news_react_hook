export default function pluralize(number, text) {
  return number > 1 ? `${number} ${text}s` : `${number} ${text}`;
}

export function isEmptyObject(obj) {
  if (!obj) return false;
  return Object.keys(obj).length === 0 && obj.constructor === Object;
}
