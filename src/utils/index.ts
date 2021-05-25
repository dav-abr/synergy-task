export function sort(a, b, key, order) {
  if (a[key] < b[key]) {
    return order === 'ascend' ? -1 : 1;
  }
  if (a[key] > b[key]) {
    return order === 'ascend' ? 1 : -1;
  }

  return 0;
}
