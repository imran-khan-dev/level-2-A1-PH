function formatString(input: string, toUpper?: boolean): string {
  if (toUpper == null) {
    return input.toUpperCase();
  }

  if (toUpper) {
    return input.toUpperCase();
  } else {
    return input.toLowerCase();
  }
}

function filterByRating(
  items: { title: string; rating: number }[]
): { title: string; rating: number }[] {
  return items.filter((item) => item.rating >= 4);
}

function concatenateArrays<T>(...arrays: T[][]): T[] {
  return arrays.reduce((acc, curr) => [...acc, ...curr], []);
}

