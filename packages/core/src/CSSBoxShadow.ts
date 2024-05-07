import { parseShadow, type ParsedShadow } from "./parseShadow";

interface ReactNativeShadowProps {
  shadowColor?: string;
  shadowOffset?: {
    height: string | number;
    width: string | number;
  };
  shadowOpacity?: number;
  shadowRadius?: string | number;
}

export class CSSBoxShadow {
  static parse(str: string) {
    return parseShadow(str);
  }

  parsedShadow: ParsedShadow;

  constructor(value: string) {
    const parsedShadow = CSSBoxShadow.parse(value);
    if (parsedShadow.length > 1) {
      console.warn(
        'Ethr: Unsupported multiple values for style property "boxShadow".',
      );
    }
    [this.parsedShadow] = parsedShadow;
  }

  resolve(): ReactNativeShadowProps {
    const { offsetX, offsetY, blurRadius, color } = this.parsedShadow;
    return {
      shadowColor: color,
      shadowOffset: {
        height: offsetY,
        width: offsetX,
      },
      shadowOpacity: 1,
      shadowRadius: blurRadius,
    };
  }
}
