import { createCryptocurrency } from "@ethr/components";
import { html } from "@ethr/core";

export const Ether = createCryptocurrency(
  ({ theme }) => (
    <html.svg viewBox="0 0 24 24">
      <html.path
        d="M12.4985 0V8.87246L19.9954 12.2234L12.4985 0Z"
        fill={theme === "colored" ? undefined : "#b7faf6"}
        fillOpacity={theme === "colored" ? 0.6 : 1}
      />
      <html.path
        d="M12.4979 0L5 12.2234L12.4979 8.87246V0Z"
        fill={theme === "colored" ? undefined : "#f0cbc3"}
      />
      <html.path
        d="M12.4985 17.9717V24.0004L20.0004 13.6185L12.4985 17.9717Z"
        fill={theme === "colored" ? undefined : "#c9b3f6"}
        fillOpacity={theme === "colored" ? 0.6 : 1}
      />
      <html.path
        d="M12.4979 24.0004V17.9707L5 13.6185L12.4979 24.0004Z"
        fill={theme === "colored" ? undefined : "#f0cbc3"}
      />
      <html.path
        d="M12.4985 16.577L19.9954 12.2228L12.4985 8.8739V16.577Z"
        fill={theme === "colored" ? undefined : "#c9b3f6"}
        fillOpacity={theme === "colored" ? 0.2 : 1}
      />
      <html.path
        d="M5 12.2228L12.4979 16.577V8.8739L5 12.2228Z"
        fill={theme === "colored" ? undefined : "#88aaf0"}
        fillOpacity={theme === "colored" ? 0.6 : 1}
      />
    </html.svg>
  ),
  "#627eea",
  "Ether",
);
