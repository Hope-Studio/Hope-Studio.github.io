const { config } = require("vuepress-theme-hope");

module.exports = config({
  title: "希望工作室",
  description: "希望工作室官网",

  headOption: {
    icon: "/favicon.ico",
    pwa: {
      manifest: "/manifest.json",
      themeColor: "#5c92d1",
      appleStatusBarColor: "black",
      appleIcon: "/assets/icon/apple-icon-152.png",
      msTileImage: "/assets/icon/ms-icon-144.png",
      msTileColor: "#ffffff",
    },
  },

  temp: "./node_modules/.temp/doc/",
  dest: "./dist",

  themeConfig: {
    baseLang: "zh-CN",
    logo: "/logo.png",

    nav: [
      { text: "主页", link: "/", icon: "home" },
      {
        text: "招新",
        icon: "profile",
        prefix: "/invite/",
        items: [
          { text: "招新细则", link: "need", icon: "notice" },
          { text: "情况说明", link: "notice", icon: "info" },
        ],
      },
      {
        text: "工作计划",
        icon: "plan",
        prefix: "/plan/",
        items: [{ text: "第一周", link: "week1", icon: "plan" }],
      },
    ],

    sidebar: {
      "/": [
        "",
        {
          title: "工作室介绍",
          icon: "info",
          prefix: "about/",
          collapsable: false,
          children: ["", "blog"],
        },
        {
          title: "工作室招新",
          icon: "profile",
          prefix: "invite/",
          collapsable: false,
          children: ["need", "notice"],
        },
        {
          title: "工作计划",
          icon: "plan",
          prefix: "plan/",
          collapsable: false,
          children: ["week1", "week2", "week3", "week4"],
        },
      ],
    },

    author: "Mr.Hope",

    footer: {
      copyright: "Copyright © 2017-present Hope Studio",
      display: true,
    },

    hostname: "https://hope-studio.innenu.com",

    comment: {
      type: "valine",
      appId: "2jQJfhjStNwFWKa1YBL1XFSI-gzGzoHsz",
      appKey: "UgkCbHl7agg9y2uRCAu0Pcwp",
    },

    mdEnhance: {
      enableAll: true,
    },

    pwa: {
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
      },
    },

    repo: "https://github.com/Hope-Studio/Hope-Studio.github.io",
    repoLabel: "Github",
    docsDir: "src",
  },
});
