import { hopeTheme } from "vuepress-theme-hope";

export default hopeTheme({
  hostname: "https://hope-studio.innenu.com",
  favicon: "/favicon.ico",

  author: {
    name: "Mr.Hope",
    url: "https://mister-hope.com",
  },

  iconAssets: "fontawesome",

  logo: "/logo.png",

  repo: "https://github.com/Hope-Studio/Hope-Studio.github.io",
  docsDir: "src",

  navbar: [
    "/",
    "/about",
    {
      text: "招新",
      icon: "user-plus",
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
        icon: "user-plus",
        prefix: "invite/",
        collapsible: false,
        children: ["", "content", "need", "notice"],
      },
    ],
  },

  copyright: "Copyright © 2017-present Hope Studio",

  displayFooter: true,

  plugins: {
    comment: {
      provider: "Waline",
      serverURL: "https://hope-studio-comment.vercel.app",
      locales: {
        "/": {
          placeholder: "评论时请留下你的邮箱以便收到回复通知",
        },
      },
    },

    mdEnhance: {
      presentation: true,
    },
  },
});
