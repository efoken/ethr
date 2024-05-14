import { createPaymentMethod } from "@ethr/components";
import { html } from "@ethr/core";

export const Wepay = createPaymentMethod(
  ({ theme }) => (
    <html.svg viewBox="0 0 56 24">
      <html.path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.68227 14.7438H8.67819L6.59829 8.38914H6.56243L4.48253 14.7438H3.51431L0 5.28243H1.90059L4.01635 11.4252H4.05221L6.02453 5.28243H7.20791L9.18023 11.4252H9.21609L11.296 5.28243H13.1966L9.68227 14.7438ZM21.301 9.41294C21.2293 8.0361 19.9383 6.65926 18.217 6.65926C16.4957 6.65926 15.2406 8.0361 15.133 9.41294H21.301ZM15.0972 10.7545C15.5275 12.5903 17.0336 13.3316 18.217 13.3316C19.5438 13.3316 20.5121 12.5549 20.9424 11.743H22.7354C21.8389 14.1789 19.6514 14.9556 18.1453 14.9556C15.4558 14.9556 13.3042 12.6609 13.3042 9.97779C13.3042 7.15351 15.4916 5 18.1812 5C20.7631 5 23.0223 7.08291 23.0223 9.83658C23.0223 10.1543 22.9864 10.6133 22.9864 10.7545H15.0972Z"
        fill={theme === "colored" ? "#fff" : "#5791Cd"}
      />
      <html.path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M29.2656 6.67797C27.3819 6.67797 26.0416 8.28453 26.0416 10.0696C26.0416 11.9975 27.4906 13.4612 29.3019 13.4612C31.0045 13.4612 32.5622 12.1046 32.5622 10.1053C32.5622 8.35593 31.2218 6.67797 29.2656 6.67797ZM24.2665 5.28561H25.9329V6.74937H25.9691C26.8385 5.49982 28.1427 5.0357 29.3743 5.0357C32.6346 5.0357 34.3734 7.6419 34.3734 10.2124C34.3734 12.6401 32.5622 15.1035 29.5192 15.1035C27.4906 15.1035 26.5125 14.0682 26.1503 13.4969H26.114V18.0667H24.3028L24.2665 5.28561ZM40.3506 6.67797C38.1409 6.67797 37.0541 8.60584 37.0541 10.1053C37.0541 11.819 38.4307 13.4612 40.3506 13.4612C42.2343 13.4612 43.7196 11.9261 43.7196 10.1053C43.7196 8.03462 42.2343 6.67797 40.3506 6.67797ZM43.6833 14.8536V13.3541H43.6471C42.9588 14.5323 41.6909 15.0678 40.3868 15.0678C37.1266 15.0678 35.2791 12.6044 35.2791 10.0696C35.2791 7.74901 36.9454 5 40.3868 5C41.7272 5 42.9588 5.53552 43.6471 6.60656H43.6833V5.28561H45.4946V14.8536H43.6833ZM50.6748 18.031H48.7911L50.2039 14.6394L46.364 5.28561H48.3202L51.1458 12.7115L54.0438 5.28561H56L50.6748 18.031Z"
        fill={theme === "colored" ? "#fff" : "#34a736"}
      />
    </html.svg>
  ),
  "#1c1c1c",
  "Wepay",
);