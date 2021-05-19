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

  locales: {
    "/": {
      lang: "zh-CN",
    },
  },

  themeConfig: {
    baseLang: "zh-CN",
    logo: "/logo.png",

    nav: [
      { text: "主页", link: "/", icon: "home" },
      { text: "工作室介绍", link: "/about/", icon: "info" },
      {
        text: "招新",
        icon: "profile",
        prefix: "/invite/",
        items: [
          { text: "招新总览", link: "", icon: "profile" },
          { text: "学习工作内容", link: "content", icon: "discover" },
          { text: "招新细则", link: "need", icon: "notice" },
          { text: "情况说明", link: "notice", icon: "info" },
        ],
      },
    ],

    sidebar: {
      "/": [
        "",
        "about/",
        "resource/",
        {
          title: "工作室招新",
          icon: "profile",
          prefix: "invite/",
          collapsable: false,
          children: ["", "content", "need", "notice"],
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
      type: "waline",
      serverURL: "https://hope-studio-comment.innenu.com",
    },

    mdEnhance: {
      presentation: true,
    },

    lastUpdate: {
      timezone: "Asia/Shanghai",
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
        shortcuts: [
          { name: "关于工作室", url: "/about/" },
          { name: "纳新说明", url: "/invite/need/" },
        ],
      },
    },

    repo: "https://github.com/Hope-Studio/Hope-Studio.github.io",
    repoLabel: "Github",
    docsDir: "src",
  },
});
