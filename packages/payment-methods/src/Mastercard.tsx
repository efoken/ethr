import { createPaymentMethod } from "@ethr/components";
import { html } from "@ethr/core";

export const Mastercard = createPaymentMethod(
  <html.svg viewBox="0 0 56 24">
    <html.path
      d="M32.7714 21.4369H22.2232V2.56836H32.7714V21.4369Z"
      fill="#ff5f00"
    />
    <html.path
      d="M22.9007 12C22.9007 8.17242 24.7012 4.76292 27.505 2.5657C25.4547 0.958992 22.867 -1.90735e-06 20.0547 -1.90735e-06C13.3969 -1.90735e-06 8 5.3725 8 12C8 18.6275 13.3969 24 20.0547 24C22.867 24 25.4547 23.041 27.505 21.4343C24.7012 19.2371 22.9007 15.8276 22.9007 12Z"
      fill="#eb001b"
    />
    <html.path
      d="M47.0018 12C47.0018 18.6275 41.6049 24 34.9471 24C32.1348 24 29.5471 23.041 27.496 21.4343C30.3006 19.2371 32.1011 15.8276 32.1011 12C32.1011 8.17242 30.3006 4.76292 27.496 2.5657C29.5471 0.958992 32.1348 -1.90735e-06 34.9471 -1.90735e-06C41.6049 -1.90735e-06 47.0018 5.3725 47.0018 12Z"
      fill="#f79e1b"
    />
  </html.svg>,
  "#141519",
  "Mastercard",
);
