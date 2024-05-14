import { createPaymentMethod } from "@ethr/components";
import { html } from "@ethr/core";

export const Bitpay = createPaymentMethod(
  <html.svg viewBox="0 0 56 24">
    <html.path d="M56 6.6776H53.087L51.401 13.8199L51.1646 14.8002C51.0018 14.8449 50.8391 14.8891 50.6764 14.9189C50.3807 14.9785 50.0701 15.0083 49.7451 15.0083C49.3752 15.0083 49.0799 14.9487 48.8579 14.8444C48.6506 14.7406 48.4879 14.5921 48.3994 14.384C48.3104 14.1914 48.2807 13.9535 48.2955 13.6863C48.3104 13.4191 48.3697 13.1221 48.4439 12.8252L49.3307 9.11299L49.9074 6.6483H46.935L45.5897 12.3499C45.435 12.993 45.3408 13.6493 45.3083 14.31C45.2786 14.9333 45.3825 15.4681 45.5897 15.9583C45.7965 16.4336 46.1664 16.8045 46.6689 17.0866C47.1719 17.3687 47.8964 17.5023 48.8134 17.5023C49.4494 17.5023 50.0112 17.4427 50.4845 17.3389C50.4994 17.3389 50.529 17.324 50.5439 17.324C50.4103 17.9179 50.1443 18.3932 49.7303 18.7642C49.3015 19.1356 48.6803 19.3288 47.8519 19.3288C47.4973 19.3288 47.1719 19.3139 46.8761 19.2692L46.299 21.6902C46.6832 21.7349 47.1125 21.7647 47.5853 21.7647C48.4726 21.7647 49.2417 21.6604 49.9069 21.4672C50.5726 21.2596 51.1344 20.9627 51.6225 20.547C52.0953 20.1308 52.495 19.6114 52.8199 19.0025C53.1453 18.3793 53.3966 17.6513 53.589 16.7901L55.5999 8.29656L56 6.6776ZM43.8004 12.781C43.6213 13.5139 43.5661 14.2719 43.6372 15.0232C43.7113 15.7805 44.0071 16.9237 44.2885 17.5028H41.4788C41.1386 16.9237 41.1534 16.6416 41.0797 16.4634C40.7103 16.7641 40.3025 17.0138 39.867 17.2058C39.4234 17.3995 38.9353 17.5028 38.3734 17.5028C37.7226 17.5028 37.1607 17.3841 36.7023 17.1616C36.2562 16.9484 35.8662 16.6331 35.5637 16.2409C35.268 15.8545 35.0613 15.409 34.9277 14.8896C34.7942 14.3696 34.7353 13.8204 34.7353 13.2264C34.7353 12.3206 34.8986 11.4744 35.2091 10.6729C35.5341 9.87082 35.9777 9.17308 36.5395 8.57913C37.1019 7.98518 38.4773 6.66369 40.7246 6.66369H45.2351L43.8004 12.781ZM41.7449 9.14328C40.3848 9.14328 40.1326 9.14328 39.5713 9.42536C39.1722 9.63294 38.8467 9.94482 38.5658 10.3014C38.2701 10.6754 38.0399 11.0973 37.8853 11.5489C37.7207 12.0214 37.6357 12.5182 37.634 13.0189C37.634 13.6421 37.7379 14.1472 37.9446 14.5186C38.1514 14.8896 38.5361 15.0674 39.098 15.0674C39.3937 15.0674 39.6746 15.0083 39.9115 14.8896C40.1479 14.7704 40.414 14.5777 40.6801 14.2956C40.7098 13.9689 40.7543 13.6272 40.8136 13.2711C40.8725 12.9146 40.9467 12.5734 41.0055 12.2764L41.7449 9.14328ZM33.9371 10.9683C33.9371 11.9338 33.7739 12.8098 33.4638 13.6113C33.1693 14.382 32.7215 15.0845 32.1477 15.6757C31.5854 16.2548 30.9202 16.7002 30.1363 17.0265C29.3529 17.3533 28.5102 17.5167 27.5932 17.5167C27.1496 17.5167 26.7059 17.472 26.2475 17.3975L25.3602 20.9766H22.4472L25.8325 6.6925H29.7219C30.4617 6.6925 31.0968 6.81168 31.6146 7.03367C32.1152 7.24001 32.5645 7.55434 32.9306 7.95439C33.2709 8.34076 33.5222 8.80112 33.6849 9.32057C33.8629 9.82563 33.9366 10.3749 33.9366 10.9693L33.9371 10.9683ZM26.7945 15.0222C27.016 15.0818 27.2975 15.0967 27.6229 15.0967C28.1402 15.0967 28.5987 15.0073 29.0275 14.8136C29.4393 14.6259 29.8071 14.3529 30.1066 14.0126C30.4029 13.6709 30.6245 13.2552 30.802 12.78C30.9726 12.2678 31.0575 11.7308 31.0532 11.1908C31.0532 10.6267 30.9345 10.137 30.6838 9.75064C30.4321 9.34987 30.0038 9.14179 29.3826 9.14179H28.2287L26.7945 15.0222ZM20.6727 15.0222C20.3027 15.0222 20.0075 14.9626 19.7854 14.8588C19.5777 14.7545 19.4155 14.6065 19.3269 14.3984C19.2379 14.2053 19.2082 13.9679 19.2231 13.7007C19.2379 13.433 19.2972 13.1361 19.3714 12.8391L20.2582 9.12739H23.5709L24.1767 6.6627H20.8492L21.6183 3.54447L18.5124 4.03413L16.5459 12.3792C16.3914 13.0223 16.2973 13.6786 16.265 14.3393C16.2353 14.9631 16.3392 15.4979 16.5459 15.9876C16.7527 16.4629 17.1226 16.8338 17.6256 17.1159C18.1281 17.398 18.8526 17.5316 19.7696 17.5316C20.4056 17.5316 20.9674 17.472 21.4407 17.3682C21.4852 17.3533 21.5589 17.3384 21.6029 17.3235L22.2098 14.7848C22.0021 14.8593 21.7953 14.904 21.6029 14.9328C21.3077 14.9924 20.9976 15.0222 20.6727 15.0222ZM13.264 6.6776L10.6907 17.5172H13.6037L16.1626 6.6776H13.264ZM16.4727 5.4306L16.9164 3.54447H14.0033L13.5597 5.4306H16.4727ZM6.81719 6.692C7.43788 6.692 7.98538 6.81119 8.44335 7.03367C8.88631 7.2453 9.27574 7.555 9.58235 7.93949C9.88503 8.33965 10.1106 8.79305 10.2476 9.27638C10.3954 9.78093 10.4691 10.3302 10.4691 10.9241C10.4691 11.83 10.3069 12.6767 9.96663 13.4931C9.62637 14.2951 9.18274 15.0078 8.60656 15.6012C8.02479 16.2012 7.33129 16.6806 6.56546 17.0121C5.78156 17.3538 4.93881 17.5316 4.02187 17.5316C3.90366 17.5316 3.69693 17.5316 3.40118 17.5167C3.10542 17.5167 2.76516 17.4869 2.39571 17.4278C1.99298 17.3673 1.59327 17.2881 1.19786 17.1904C0.784615 17.0895 0.383112 16.9452 0 16.7598L3.38585 2.47526L6.41758 2L5.21923 7.06347C5.48531 6.94428 5.72221 6.85539 5.98829 6.79629C6.23953 6.7218 6.52094 6.692 6.81719 6.692ZM4.27311 15.0972C4.73158 15.0972 5.16037 14.9929 5.55949 14.756C5.96413 14.5308 6.32085 14.2281 6.60947 13.8651C6.90922 13.4859 7.14406 13.0593 7.30435 12.6027C7.46898 12.1302 7.5539 11.6333 7.55559 11.1327C7.55559 10.509 7.45223 10.0193 7.245 9.66274C7.03827 9.30617 6.60947 9.14328 6.04764 9.14328C5.86959 9.14328 5.6777 9.15818 5.38194 9.23267C5.08619 9.29127 4.83494 9.44026 4.59804 9.64784L3.3265 15.0376C3.71078 15.0972 3.82948 15.1116 3.93284 15.1116C4.00703 15.0967 4.12523 15.0972 4.27311 15.0972Z" />
  </html.svg>,
  "#002855",
  "Bitpay",
);
