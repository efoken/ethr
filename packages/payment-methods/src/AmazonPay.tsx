import { createPaymentMethod } from "@ethr/components";
import { html } from "@ethr/core";

export const AmazonPay = createPaymentMethod(
  ({ theme }) => (
    <html.svg viewBox="0 0 56 24">
      <html.path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M31.083 12.0097C31.1167 12.0549 31.1507 12.1005 31.1845 12.147C31.301 12.3064 31.3255 12.4935 31.1768 12.5993C30.8226 12.8953 30.1939 13.4427 29.8489 13.7494C29.7342 13.8469 29.5709 13.8628 29.4396 13.7892C28.9468 13.3793 28.8009 13.1619 28.5705 12.8186L28.5704 12.8184C28.5319 12.7612 28.4911 12.7004 28.446 12.6346C27.4953 13.6037 26.8176 13.8935 25.591 13.8935C24.1328 13.8935 22.9981 12.9934 22.9981 11.1947C22.9981 9.78706 23.7602 8.83175 24.8458 8.36253C25.64 8.01339 26.7034 7.90594 27.6203 7.81329C27.7867 7.79648 27.9483 7.78016 28.1025 7.76297V7.54369C28.1025 7.50173 28.1028 7.45898 28.1032 7.41568V7.41544V7.4152V7.41495L28.1032 7.41394C28.1062 7.03206 28.1096 6.60691 27.8909 6.28784C27.6855 5.96889 27.2761 5.83701 26.9188 5.83701C26.2579 5.83701 25.6722 6.1759 25.5266 6.87666C25.5078 7.03989 25.3823 7.17045 25.2199 7.19561L23.5409 7.01467C23.4572 7.00318 23.382 6.95768 23.3329 6.88889C23.2839 6.8201 23.2654 6.73413 23.2818 6.65125C23.6682 4.61336 25.5082 4 27.1565 4C27.9982 4 29.0992 4.22388 29.7631 4.86177C30.5423 5.58607 30.5368 6.5318 30.5308 7.56806C30.5303 7.65945 30.5297 7.75154 30.5297 7.84424V10.543C30.5297 11.2679 30.7991 11.6291 31.083 12.0097ZM26.582 12.1563C27.0681 12.1563 27.5066 11.8557 27.7811 11.3696C28.1069 10.789 28.1066 10.2456 28.1062 9.59987V9.59985L28.1061 9.5311V9.15695C26.8534 9.15695 25.5302 9.42376 25.5302 10.9004C25.5302 11.6503 25.9181 12.1563 26.582 12.1563ZM9.86262 13.7095H11.5937H11.5953C11.6821 13.7114 11.7663 13.6788 11.829 13.6186C11.8917 13.5585 11.9279 13.4758 11.9295 13.3889V8.67674L11.9295 8.60299C11.9288 7.5784 11.9278 6.2233 13.1255 6.2233C14.2327 6.2233 14.2156 7.41393 14.2018 8.3754V8.37545V8.37549V8.37553V8.37558C14.2003 8.47923 14.1988 8.58021 14.1988 8.67674V13.3904C14.2017 13.5606 14.3355 13.6998 14.5055 13.7095H16.2412C16.3278 13.711 16.4115 13.6782 16.4739 13.6181C16.5363 13.558 16.5723 13.4755 16.5739 13.3889V8.67674L16.5737 8.56472C16.5727 8.06546 16.5713 7.39173 16.7364 6.97314C16.9048 6.54526 17.3118 6.25881 17.7714 6.24477C18.2728 6.24477 18.6607 6.41344 18.7895 7.01147C18.8553 7.29929 18.8468 7.96652 18.8411 8.40898C18.8398 8.5134 18.8386 8.6053 18.8386 8.67674V13.3904C18.8408 13.5609 18.975 13.7005 19.1453 13.7095H20.8764C20.9632 13.7114 21.0474 13.6788 21.1101 13.6186C21.1728 13.5585 21.209 13.4758 21.2106 13.3889V7.77817C21.2106 7.64145 21.213 7.50172 21.2154 7.36046L21.2154 7.36024C21.2295 6.52248 21.2446 5.63073 20.7736 4.99045C20.2027 4.26416 19.2845 3.90224 18.3715 4.04365C17.4586 4.18507 16.6929 4.80782 16.3684 5.67281C15.8824 4.54883 15.1878 4.02594 14.1206 4.02594C13.0534 4.02594 12.2607 4.54883 11.8406 5.67281H11.8084V4.51203C11.7993 4.34658 11.6672 4.21447 11.5017 4.20535H9.88715C9.70885 4.20359 9.56178 4.34454 9.55596 4.52276V13.4165C9.57167 13.5765 9.70203 13.701 9.86262 13.7095ZM6.85081 13.7769C6.73679 13.8758 6.57293 13.8924 6.44142 13.8183C5.95082 13.4101 5.80291 13.1894 5.57577 12.8506L5.57575 12.8505L5.57556 12.8502C5.53655 12.792 5.4952 12.7304 5.44937 12.6636C4.49719 13.6328 3.82407 13.9226 2.59282 13.9226C1.13465 13.9226 0 13.0225 0 11.2222C0 9.81612 0.766653 8.86081 1.83997 8.39159C2.63252 8.04377 3.68999 7.93582 4.60422 7.84249C4.77421 7.82513 4.93925 7.80828 5.09671 7.79049V7.56662C5.09671 7.52392 5.09705 7.48041 5.0974 7.43633L5.09741 7.43622C5.10044 7.05449 5.10381 6.62949 4.88665 6.30923C4.67505 5.99028 4.27332 5.85994 3.91453 5.85994C3.25368 5.85994 2.66489 6.19882 2.52076 6.89959C2.50249 7.06306 2.37671 7.19387 2.21409 7.21853L0.548924 7.03606C0.465832 7.02416 0.39125 6.97872 0.342571 6.91033C0.293892 6.84194 0.275371 6.75659 0.291328 6.67418C0.676188 4.63782 2.51616 4.02293 4.16446 4.02293C5.00778 4.02293 6.10869 4.2468 6.77108 4.8847C7.54867 5.61276 7.54386 6.56587 7.5386 7.60746C7.53817 7.69345 7.53773 7.78004 7.53773 7.86716V10.5644C7.53773 11.2908 7.80724 11.6522 8.09112 12.0328C8.12484 12.078 8.15876 12.1235 8.19246 12.1699C8.30285 12.3232 8.32739 12.5149 8.19246 12.6299C7.83826 12.9259 7.20961 13.4717 6.86461 13.78L6.85081 13.7769ZM5.105 9.55415L5.10505 9.63811C5.10566 10.2759 5.10618 10.8168 4.78147 11.3942C4.50548 11.8819 4.06848 12.1824 3.58089 12.1824C2.91697 12.1824 2.52904 11.6764 2.52904 10.925C2.52904 9.44988 3.85229 9.18153 5.105 9.18153V9.55415ZM32.3606 4.4926V5.75919C32.3597 5.84607 32.3944 5.92953 32.4567 5.99009C32.519 6.05065 32.6034 6.08303 32.6903 6.07967H35.671L32.2533 10.9866C32.0973 11.2498 32.0236 11.5536 32.0417 11.8591V13.1548C32.0417 13.3419 32.2487 13.555 32.4465 13.4492C34.3315 12.4717 36.5731 12.4677 38.4616 13.4385C38.6778 13.5504 38.8818 13.3342 38.8818 13.1471V11.7855C38.8759 11.5772 38.7589 11.3882 38.5751 11.2902C37.58 10.7305 36.4223 10.5664 35.3275 10.5925L38.2776 6.38175C38.5521 6.00453 38.7054 5.76532 38.7054 5.58284V4.4926C38.7063 4.40599 38.6718 4.32278 38.6098 4.26226C38.5478 4.20175 38.4639 4.16918 38.3773 4.17212H32.6841C32.5975 4.16725 32.5128 4.19934 32.4511 4.26043C32.3894 4.32152 32.3566 4.40588 32.3606 4.4926ZM47.5649 9.02642C47.5649 6.2203 46.1742 4.0122 43.6028 4.0122C41.0974 4.0122 39.7067 6.1835 39.7067 8.93289C39.7067 11.6823 41.0805 13.8904 43.6028 13.8904C46.0316 13.8904 47.5649 11.739 47.5649 9.02642ZM42.2628 8.65252C42.2628 7.56687 42.344 5.828 43.6213 5.828C44.1702 5.828 44.5581 6.07487 44.7529 6.68824C44.9798 7.3982 45.012 8.29677 45.012 9.04507C45.012 10.1859 44.9614 12.0567 43.6044 12.0567C42.2622 12.0567 42.2626 9.7885 42.2628 8.6885V8.65252ZM49.1922 13.6912H50.9187H50.9202C51.1008 13.6946 51.2509 13.5527 51.2575 13.3721V8.5864C51.2575 7.98531 51.2897 7.44249 51.532 6.89966C51.6983 6.48673 52.0901 6.20873 52.5348 6.18816C53.6391 6.18816 53.6285 7.39841 53.6202 8.34919C53.6195 8.42938 53.6188 8.50772 53.6188 8.58334V13.412C53.6402 13.5669 53.7693 13.6844 53.9255 13.6912H55.6673C55.8325 13.6946 55.9747 13.5753 56 13.412V7.81664C56 6.9564 56 5.75881 55.5477 5.04731C55.0586 4.28061 54.3011 4 53.5253 4C52.3293 4 51.6501 4.57963 51.1655 5.79561H51.1318V4.43549C51.0968 4.2933 50.9715 4.19177 50.8251 4.18707H49.2182C49.0484 4.1829 48.9038 4.30956 48.8855 4.47842V13.3721C48.8877 13.5427 49.0219 13.6822 49.1922 13.6912Z"
        fill={theme === "colored" ? "#fff" : "#000"}
      />
      <html.path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M35.2051 19.3649C35.5992 18.385 36.4762 16.1892 36.0592 15.6571H36.0623C35.647 15.1239 33.3163 15.4037 32.268 15.5296L32.2658 15.5298C31.9469 15.5682 31.8978 15.2906 32.1845 15.0897C34.0459 13.7817 37.0957 14.1559 37.4499 14.5975C37.8041 15.0391 37.3533 18.0967 35.6099 19.5565C35.3416 19.7804 35.0855 19.6608 35.2051 19.3649ZM22.68 20.8763C26.7341 20.8763 31.4552 19.5959 34.7073 17.1961V17.2007C35.2455 16.7959 34.784 16.201 34.235 16.434C30.6852 17.9315 26.8746 18.7131 23.022 18.7341C17.6769 18.7341 12.5066 17.2682 8.32369 14.8347C7.95723 14.6216 7.6843 14.9972 7.99096 15.2717C12.0179 18.9052 17.2564 20.904 22.68 20.8763Z"
        fill="#f90"
      />
    </html.svg>
  ),
  "#1c1c1c",
  "AmazonPay",
);