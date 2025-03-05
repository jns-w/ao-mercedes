import localFont from "next/font/local";

export const visby = localFont({
  src: [
    {
      path: "../../public/fonts/visby/VisbyRegular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/visby/VisbySemibold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../public/fonts/visby/VisbyBold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../public/fonts/visby/VisbyExtrabold.woff2",
      weight: "800",
      style: "normal",
    }
  ],
  variable: "--font-visby",
})