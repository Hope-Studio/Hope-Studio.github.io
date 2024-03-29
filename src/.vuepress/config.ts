import { viteBundler } from "@vuepress/bundler-vite";
import { defineUserConfig } from "vuepress";
import theme from "./theme";

export default defineUserConfig({
  dest: "./dist",

  lang: "zh-CN",
  title: "希望工作室",
  description: "希望工作室官网",

  bundler: viteBundler(),
  theme,
});
