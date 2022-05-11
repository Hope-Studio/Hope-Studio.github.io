import { defineUserConfig } from "vuepress";
import theme from "./theme";

export default defineUserConfig({
  dest: "./dist",

  head: [
    [
      "link",
      {
        rel: "stylesheet",
        href: "//at.alicdn.com/t/font_2410206_kxwb6og9m5.css",
      },
    ],
  ],

  locales: {
    "/": {
      lang: "zh-CN",
      title: "希望工作室",
      description: "希望工作室官网",
    },
  },

  theme,
});
