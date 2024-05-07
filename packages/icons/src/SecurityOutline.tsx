import { createIcon } from "@ethr/components";
import { html } from "@ethr/core";

export const SecurityOutline = createIcon(
  <html.svg>
    <html.path
      fillRule="evenodd"
      d="m12.81 1.36 7 3.11C20.53 4.79 21 5.51 21 6.3V11c0 5.55-3.84 10.74-9 12-5.16-1.26-9-6.45-9-12V6.3c0-.79.47-1.51 1.19-1.83l7-3.11c.51-.23 1.1-.23 1.62 0M5.003 6.297l-.002.003L5 6.302V11c0 4.532 3.042 8.705 7 9.926 3.958-1.221 7-5.394 7-9.926V6.302l-.001-.002-.002-.003L12 3.19H12z"
      clipRule="evenodd"
    />
    <html.path d="m15.13 15.32-.63-2.73 2.1-1.81a.5.5 0 0 0-.28-.88l-2.78-.24-1.08-2.55a.498.498 0 0 0-.92 0l-1.08 2.56-2.78.24a.5.5 0 0 0-.28.88l2.1 1.81-.64 2.72c-.1.43.37.77.75.54L12 14.42l2.38 1.44c.38.23.85-.11.75-.54" />
  </html.svg>,
  "SecurityOutline",
);
