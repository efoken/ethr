import type { html } from "@ethr/core";
import type { Styles } from "react-strict-dom/dist/types/styles";

export interface RadioProps extends React.ComponentProps<typeof html.div> {
  checked?: boolean;
  /**
   * The default checked state. Use when the component is not controlled.
   * @default false
   */
  defaultChecked?: boolean;
  /** @default false */
  disabled?: boolean;
  onBlur?: React.FocusEventHandler<any>;
  onFocus?: React.FocusEventHandler<any>;
  onFocusVisible?: React.FocusEventHandler<any>;
  /** @default false */
  readOnly?: boolean;
  /** @default false */
  required?: boolean;
  /**
   * The size of the component.
   * @default "medium"
   */
  size?: "small" | "medium";
  /**
   * Override or extend the styles applied to the component.
   */
  styles?: {
    root?: Styles;
    radio?: Styles;
    action?: Styles;
    input?: Styles;
    label?: Styles;
  };
  /**
   * The value of the component. The DOM API casts this to a string. The browser
   * uses "on" as the default value.
   */
  value?: React.ComponentProps<typeof html.input>["value"];
}

export type RadioOwnerState = Required<
  Pick<RadioProps, "checked" | "disabled" | "size">
> &
  Pick<RadioProps, "styles"> & {
    focusVisible: boolean;
  };

export type RadioStyleKey = keyof NonNullable<RadioProps["styles"]>;
