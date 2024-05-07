const UNITS_RE = /(em|rem|px)?\s*$/;

export function parseRem(length: string | number | { toString: () => string }) {
  const value = Number.parseFloat(length.toString());

  switch (UNITS_RE.exec(length.toString())?.[1]) {
    case "em": {
      return value * 16;
    }
    case "rem": {
      return value * 16;
    }
    default: {
      return value;
    }
  }
}
