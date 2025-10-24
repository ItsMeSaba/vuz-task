export function toggleInArray(arr: string[], value: string) {
  const i = arr.indexOf(value);
  if (i === -1) arr.push(value);
  else arr.splice(i, 1);
}
