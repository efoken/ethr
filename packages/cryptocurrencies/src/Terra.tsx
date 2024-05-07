import { createCryptocurrency } from "@ethr/components";
import { html } from "@ethr/core";

export const Terra = createCryptocurrency(
  ({ theme }) => (
    <html.svg viewBox="0 0 24 24">
      <html.path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.8989 19.0706C11.4933 21.3379 13.6265 23.068 14.7033 22.9971C14.7409 22.9946 18.7895 22.2166 21.0055 18.3994C22.7305 15.4294 22.143 12.5618 19.7972 12.4994C18.9535 12.5626 9.76574 14.7505 10.8989 19.0706ZM12.9365 2.00002C11.4088 2.00002 9.95874 2.32794 8.64706 2.9129C8.41755 3.00909 8.19399 3.11888 7.97755 3.24168C7.82896 3.32109 7.68037 3.39966 7.53691 3.48505L7.57107 3.49616C7.1364 3.7976 6.76237 4.14858 6.4558 4.55506C3.42168 8.57208 13.5906 11.4918 19.0269 11.502C21.529 13.3013 22.231 6.43463 19.7869 4.52859C17.8801 2.89224 15.4492 1.99495 12.9365 2.00002Z"
        fill={theme === "colored" ? undefined : "#0e3ca5"}
        fillOpacity={theme === "colored" ? 0.6 : 1}
      />
      <html.path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.11397 4.35681C7.7391 6.37643 3.15846 7.79997 2.40527 7.57795L2.40186 7.56941L2.49579 7.38751C3.28277 5.91084 4.40036 4.63602 5.76133 3.66255C6.04313 3.46016 6.33519 3.27143 6.63664 3.09552C7.27625 2.73259 7.9338 2.71038 8.14985 2.70184C10.1891 2.73942 9.12422 4.34059 9.11311 4.35681"
        fill={theme === "colored" ? undefined : "#5493f7"}
      />
      <html.path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.95892 19.4904C8.0614 20.154 7.95636 22.7765 7.81802 22.9976C7.70017 23.0045 7.45252 23.0198 6.73776 22.6236C5.35086 21.8422 4.14328 20.7786 3.19298 19.5015C2.4978 18.5661 1.95322 17.5276 1.579 16.4239C1.19377 15.2821 0.998186 14.0849 1.00001 12.8799C0.997881 11.5553 1.23451 10.2411 1.69855 9.0004H1.70026C2.52006 10.0755 3.46795 11.0482 4.27324 12.1344C5.04095 13.1677 6.09644 14.8526 6.31078 15.213C7.64466 17.4478 7.8573 18.8269 7.95892 19.4904Z"
        fill={theme === "colored" ? undefined : "#5493f7"}
      />
      <html.path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M23.3997 13.0034C23.3997 14.4372 23.1264 15.8078 22.6319 17.0649C21.3339 18.4653 12.5791 15.0188 12.4929 14.9812C11.2956 14.4552 7.65095 12.8531 7.32218 10.3374C6.84908 6.7183 14.1692 4.1957 17.3861 4.10006C17.7712 4.10433 18.9454 4.11799 19.6294 4.67648C20.8155 5.71495 21.7657 6.99525 22.4159 8.43135C23.0662 9.86745 23.4017 11.4261 23.3997 13.0026V13.0034ZM15.7439 21.9555C16.2674 20.1024 20.8446 18.2032 21.8548 18.1007C21.9795 18.0879 22.0325 18.1759 21.9778 18.2766C20.924 20.1929 19.3638 21.771 17.4757 22.7941C16.521 23.2569 15.4706 22.9196 15.7439 21.9555Z"
        fill={theme === "colored" ? undefined : "#5493f7"}
      />
    </html.svg>
  ),
  "#0e3ca5",
  "Terra",
);