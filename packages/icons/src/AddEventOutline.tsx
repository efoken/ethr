import { createIcon } from "@ethr/components";
import { html } from "@ethr/core";

export const AddEventOutline = createIcon(
  <html.svg>
    <html.path
      fillRule="evenodd"
      d="M21 20c0 1.1-.9 2-2 2H5a2 2 0 0 1-2-2l.01-14c0-1.1.88-2 1.99-2h1V3c0-.55.45-1 1-1s1 .45 1 1v1h8V3c0-.55.45-1 1-1s1 .45 1 1v1h1c1.1 0 2 .9 2 2zM5.01 6l-.001 2H19V6zM5 10v9.037c.02.533.462.963 1 .963h12c.55 0 1-.45 1-1v-9z"
      clipRule="evenodd"
    />
    <html.path d="M15.75 13.75v1.5h1.5c.413 0 .75.338.75.75 0 .413-.337.75-.75.75h-1.5v1.5c0 .413-.338.75-.75.75a.75.75 0 0 1-.75-.75v-1.5h-1.5A.75.75 0 0 1 12 16c0-.412.338-.75.75-.75h1.5v-1.5c0-.412.338-.75.75-.75s.75.338.75.75" />
  </html.svg>,
  "AddEventOutline",
);
