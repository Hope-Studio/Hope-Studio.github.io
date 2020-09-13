const resolve = require("vuepress-theme-hope/resolve");

module.exports = resolve({
  title: "希望工作室",
  description: "希望工作室文档",

  headOption: {
    icon: "/favicon.ico",
    pwa: {
      manifest: "/manifest.json",
      themeColor: "#46bd87",
      appleStatusBarColor: "black",
    },
  },

  temp: "./node_modules/.temp/doc/",
  dest: "./dist",

  themeConfig: {
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
          children: ["week1"],
        },
      ],
    },

    author: "Mr.Hope",

    footer: {
      display: true,
    },

    markdown: {
      enableAll: true,
    },

    comment: {
      type: "valine",
      appId: "2jQJfhjStNwFWKa1YBL1XFSI-gzGzoHsz",
      appKey: "UgkCbHl7agg9y2uRCAu0Pcwp",
    },

    blog: {
      sidebarDisplay: "mobile",
    },
  },
});
