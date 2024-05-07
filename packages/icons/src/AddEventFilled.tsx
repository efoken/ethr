import { createIcon } from "@ethr/components";
import { html } from "@ethr/core";

export const AddEventFilled = createIcon(
  <html.svg>
    <html.path
      fillRule="evenodd"
      d="M16 3v1H8V3c0-.55-.45-1-1-1s-1 .45-1 1v1H5c-1.11 0-1.99.9-1.99 2L3 20a2 2 0 0 0 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2h-1V3c0-.55-.45-1-1-1s-1 .45-1 1m2 17H6c-.55 0-1-.45-1-1V9h14v10c0 .55-.45 1-1 1"
      clipRule="evenodd"
    />
    <html.path d="M15.75 13.75v1.5h1.5c.413 0 .75.338.75.75 0 .413-.337.75-.75.75h-1.5v1.5c0 .413-.338.75-.75.75a.75.75 0 0 1-.75-.75v-1.5h-1.5A.75.75 0 0 1 12 16c0-.412.338-.75.75-.75h1.5v-1.5c0-.412.338-.75.75-.75s.75.338.75.75" />
  </html.svg>,
  "AddEventFilled",
);
