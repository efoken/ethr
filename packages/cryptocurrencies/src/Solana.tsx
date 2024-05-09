import { createCryptocurrency } from "@ethr/components";
import { html } from "@ethr/core";

export const Solana = createCryptocurrency(
  ({ theme }) => (
    <html.svg viewBox="0 0 24 24">
      <html.path
        d="M3.89841 16.5015C4.04325 16.3552 4.24239 16.2698 4.45361 16.2698H23.6078C23.9578 16.2698 24.1328 16.6965 23.8853 16.9464L20.1016 20.7684C19.9568 20.9147 19.7576 21 19.5464 21H0.392251C0.0422387 21 -0.132768 20.5733 0.114655 20.3234L3.89841 16.5015Z"
        fill={theme === "colored" ? undefined : "url(#solana-gradient-1)"}
      />
      <html.path
        d="M3.89841 2.23163C4.04928 2.08534 4.24843 2 4.45361 2H23.6078C23.9578 2 24.1328 2.42669 23.8853 2.67661L20.1016 6.49856C19.9568 6.64485 19.7576 6.73019 19.5464 6.73019H0.392251C0.0422387 6.73019 -0.132768 6.3035 0.114655 6.05358L3.89841 2.23163Z"
        fill={theme === "colored" ? undefined : "url(#solana-gradient-2)"}
      />
      <html.path
        d="M20.1016 9.32081C19.9568 9.17451 19.7576 9.08917 19.5464 9.08917H0.392251C0.0422387 9.08917 -0.132768 9.51586 0.114655 9.76578L3.89841 13.5877C4.04325 13.734 4.24239 13.8194 4.45361 13.8194H23.6078C23.9578 13.8194 24.1328 13.3927 23.8853 13.1427L20.1016 9.32081Z"
        fill={theme === "colored" ? undefined : "url(#solana-gradient-3)"}
      />
      {theme !== "colored" && (
        <html.defs>
          <html.linearGradient
            id="solana-gradient-1"
            x1={21.778}
            y1={-0.283_102}
            x2={8.311_38}
            y2={25.2531}
            gradientUnits="userSpaceOnUse"
          >
            <html.stop stopColor="#00ffa3" />
            <html.stop offset={1} stopColor="#dc1fff" />
          </html.linearGradient>
          <html.linearGradient
            id="solana-gradient-2"
            x1={15.9816}
            y1={-3.339_84}
            x2={2.515_05}
            y2={22.1964}
            gradientUnits="userSpaceOnUse"
          >
            <html.stop stopColor="#00ffa3" />
            <html.stop offset={1} stopColor="#dc1fff" />
          </html.linearGradient>
          <html.linearGradient
            id="solana-gradient-3"
            x1={18.8614}
            y1={-1.821_23}
            x2={5.394_76}
            y2={23.715}
            gradientUnits="userSpaceOnUse"
          >
            <html.stop stopColor="#00ffa3" />
            <html.stop offset={1} stopColor="#dc1fff" />
          </html.linearGradient>
        </html.defs>
      )}
    </html.svg>
  ),
  ["225deg", "#00faa3", "#dc1fff"],
  "Solana",
);
