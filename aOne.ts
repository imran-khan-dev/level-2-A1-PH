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

console.log(formatString("Programming Hero", false));
