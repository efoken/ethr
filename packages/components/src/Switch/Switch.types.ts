import type { html, Styles } from "@ethr/core";

export interface SwitchProps extends React.ComponentProps<typeof html.div> {
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
   * Override or extend the styles applied to the component.
   */
  styles?: {
    root?: Styles;
    track?: Styles;
    thumb?: Styles;
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

export type SwitchOwnerState = Required<
  Pick<SwitchProps, "checked" | "disabled">
> &
  Pick<SwitchProps, "styles"> & {
    focusVisible: boolean;
  };

export type SwitchStyleKey = keyof NonNullable<SwitchProps["styles"]>;
