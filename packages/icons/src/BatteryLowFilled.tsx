import { createIcon } from "@ethr/components";
import { html } from "@ethr/core";

export const BatteryLowFilled = createIcon(
  <html.svg>
    <html.path d="M2 14v-4h2V8.35q0-.575.388-.963Q4.775 7 5.35 7h15.3q.575 0 .963.387.387.388.387.963v7.3q0 .574-.387.963a1.3 1.3 0 0 1-.963.387H5.35q-.575 0-.962-.387A1.3 1.3 0 0 1 4 15.65V14zm15 1V9H6v6z" />
  </html.svg>,
  "BatteryLowFilled",
);
