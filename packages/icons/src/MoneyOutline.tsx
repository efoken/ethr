import { createIcon } from "@ethr/components";
import { html } from "@ethr/core";

export const MoneyOutline = createIcon(
  <html.svg>
    <html.path
      fillRule="evenodd"
      d="M5 18c-.55 0-1 .45-1 1s.45 1 1 1h16c1.1 0 2-.9 2-2V8c0-.55-.45-1-1-1s-1 .45-1 1v10zm-2-5c0 .555.445 1 1 1h13V7c0-.555-.445-1-1-1H4c-.555 0-1 .445-1 1zm-2 0c0 1.66 1.34 3 3 3h13c1.1 0 2-.9 2-2V7c0-1.66-1.34-3-3-3H4C2.34 4 1 5.34 1 7z"
      clipRule="evenodd"
    />
    <html.path d="M13 10a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
  </html.svg>,
  "MoneyOutline",
);
