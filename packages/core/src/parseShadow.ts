export interface ParsedShadow {
  blurRadius: string | number;
  color?: string;
  inset: boolean;
  offsetX: string | number;
  offsetY: string | number;
  spreadRadius: string | number;
}

const VALUES_RE = /,(?![^(]*\))/;
const PARTS_RE = /\s(?![^(]*\))/;
const LENGTH_RE = /^[0-9]+[a-zA-Z%]+?$/;

export function parseShadow(str: string) {
  return str.split(VALUES_RE).map<ParsedShadow>((s) => {
    const parts = s.trim().split(PARTS_RE);
    const inset = parts.includes("inset");
    const last = parts.slice(-1)[0];
    const color = last !== "0" && !LENGTH_RE.test(last) ? last : undefined;

    const [offsetX, offsetY, blurRadius, spreadRadius] = parts
      .filter((n) => n !== "inset")
      .filter((n) => n !== color)
      .map((v) => {
        if (!/px$/.test(v) && v !== "0") {
          return v;
        }
        const n = Number.parseFloat(v);
        return !Number.isNaN(n) ? n : v;
      });

    return {
      blurRadius,
      color,
      inset,
      offsetX,
      offsetY,
      spreadRadius,
    };
  });
}
