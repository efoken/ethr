import { createPaymentMethod } from "@ethr/components";
import { html } from "@ethr/core";

export const ApplePay = createPaymentMethod(
  ({ theme }) => (
    <html.svg viewBox="0 0 56 24">
      <html.path
        d="M11.4988 5.28059C10.1511 5.28059 9.06383 6.09165 8.36165 6.09165C7.62548 6.09165 6.64015 5.32565 5.47362 5.32565C3.2538 5.32565 1 7.1618 1 10.5975C1 12.7491 1.8381 15.0133 2.86873 16.489C3.7408 17.7168 4.52226 18.7307 5.63217 18.7307C6.73076 18.7307 7.21776 18.0097 8.58816 18.0097C9.96988 18.0097 10.287 18.7081 11.4988 18.7081C12.7107 18.7081 13.5148 17.6155 14.2736 16.5341C15.1117 15.2837 15.4741 14.0671 15.4855 14.0108C15.4175 13.9882 13.1071 13.0533 13.1071 10.4173C13.1071 8.14183 14.9192 7.12801 15.0211 7.04916C13.8319 5.32565 12.0085 5.28059 11.4988 5.28059ZM10.8759 3.82745C11.4196 3.16283 11.8046 2.26165 11.8046 1.34921C11.8046 1.22529 11.7933 1.10138 11.7707 1C10.8873 1.03379 9.8 1.58577 9.15444 2.3405C8.65611 2.915 8.18044 3.82745 8.18044 4.73989C8.18044 4.87506 8.20309 5.02151 8.21441 5.06656C8.27104 5.07783 8.36165 5.08909 8.45225 5.08909C9.25637 5.08909 10.2757 4.54839 10.8759 3.82745Z"
        fill={theme === "colored" ? "#fff" : "#000"}
      />
      <html.path
        d="M19.9374 2.27291V18.5279H22.8594V13.1997H26.4043C29.7114 13.1997 32.0218 10.9918 32.0218 7.7701C32.0218 4.49206 29.7906 2.27291 26.5289 2.27291H19.9374ZM22.8594 4.70609H25.7587C27.8653 4.70609 29.0545 5.77624 29.0545 7.7701C29.0545 9.70763 27.8313 10.789 25.7474 10.789H22.8594V4.70609Z"
        fill={theme === "colored" ? "#fff" : "#000"}
      />
      <html.path
        d="M37.5043 16.5341C36.2585 16.5341 35.3638 15.9145 35.3638 14.8781C35.3638 13.8756 36.1 13.3123 37.6742 13.211L40.4716 13.0307V14.0108C40.4716 15.4414 39.2032 16.5341 37.5043 16.5341ZM36.6776 18.7307C38.2971 18.7307 39.6562 18.0323 40.3471 16.8382H40.5396V18.5279H43.2464V10.1132C43.2464 7.49974 41.457 5.95648 38.2745 5.95648C35.3298 5.95648 33.2799 7.34204 33.0534 9.51613H35.7036C35.964 8.68254 36.8474 8.23195 38.1386 8.23195C39.6562 8.23195 40.4716 8.90783 40.4716 10.1132V11.1495L37.2778 11.341C34.2652 11.5212 32.5777 12.8054 32.5777 15.0358C32.5777 17.2888 34.2879 18.7307 36.6776 18.7307Z"
        fill={theme === "colored" ? "#fff" : "#000"}
      />
      <html.path
        d="M46.3732 23C49.148 23 50.4731 21.9862 51.5264 18.9222L56 6.2043H53.0327L50.1447 15.8244H49.9521L47.0528 6.2043H43.9722L48.4005 18.5842L48.2533 19.1249C47.8909 20.2627 47.2227 20.7133 46.0335 20.7133C45.8409 20.7133 45.4219 20.702 45.2633 20.6682V22.9549C45.4445 22.9887 46.2033 23 46.3732 23Z"
        fill={theme === "colored" ? "#fff" : "#000"}
      />
    </html.svg>
  ),
  "#1c1c1c",
  "ApplePay",
);
