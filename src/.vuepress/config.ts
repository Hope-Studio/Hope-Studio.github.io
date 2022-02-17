import { defineHopeConfig } from "vuepress-theme-hope";

export default defineHopeConfig({
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

  theme: "hope",

  themeConfig: {
    hostname: "https://hope-studio.innenu.com",

    author: {
      name: "Mr.Hope",
      url: "https://mrhope.site",
    },

    iconPrefix: "iconfont icon-",

    logo: "/logo.png",

    repo: "https://github.com/Hope-Studio/Hope-Studio.github.io",
    docsDir: "src",

    navbar: [
      "/",
      "/about",
      {
        text: "招新",
        icon: "profile",
        prefix: "/invite/",
        children: ["", "content", "need", "notice"],
      },
    ],

    sidebar: {
      "/": [
        "",
        "about",
        "resource/",
        {
          text: "工作室招新",
          icon: "profile",
          prefix: "invite/",
          collapsable: false,
          children: ["", "content", "need", "notice"],
        },
      ],
    },

    copyright: "Copyright © 2017-present Hope Studio",

    displayFooter: true,

    plugins: {
      comment: {
        type: "waline",
        serverURL: "https://hope-studio-comment.vercel.app",
      },

      mdEnhance: {
        presentation: true,
      },

      pwa: {
        favicon: "/favicon.ico",
        themeColor: "#5c92d1",
        apple: {
          statusBarColor: "white",
          icon: "/assets/icon/apple-icon-152.png",
        },
        msTile: {
          image: "/assets/icon/ms-icon-144.png",
          color: "#ffffff",
        },
        manifest: {
          icons: [
            {
              src: "/assets/icon/chrome-192.png",
              sizes: "192x192",
              type: "image/png",
            },
            {
              src: "/assets/icon/chrome-512.png",
              sizes: "512x512",
              type: "image/png",
            },
            {
              src: "/assets/icon/chrome-mask-192.png",
              sizes: "192x192",
              purpose: "maskable",
              type: "image/png",
            },
            {
              src: "/assets/icon/chrome-mask-512.png",
              sizes: "512x512",
              purpose: "maskable",
              type: "image/png",
            },
          ],
          shortcuts: [
            { name: "关于工作室", url: "/about.html" },
            { name: "纳新说明", url: "/invite/need/" },
          ],
        },
      },
    },
  },
});
