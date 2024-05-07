import { createIcon } from "@ethr/components";
import { html } from "@ethr/core";

export const TransactionFilled = createIcon(
  <html.svg width={24} height={24}>
    <html.path d="m5.326 11.998-3.164 3.176a.584.584 0 0 0 0 .808l3.164 3.175c.353.364.967.102.967-.399V16.71h6.84c.626 0 1.138-.512 1.138-1.138s-.512-1.138-1.138-1.138h-6.84v-2.037a.563.563 0 0 0-.967-.399m16.513-3.653L18.675 5.17c-.352-.364-.967-.102-.967.398v2.037h-6.851c-.626 0-1.138.513-1.138 1.139 0 .625.512 1.138 1.138 1.138h6.84v2.037c0 .512.614.762.967.398l3.164-3.175a.56.56 0 0 0 .011-.797" />
  </html.svg>,
  "TransactionFilled",
);