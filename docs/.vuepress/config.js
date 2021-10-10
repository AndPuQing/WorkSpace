module.exports = {
  title: "WorkSpace",
  description: "Just playing around",
  head: [["link", { rel: "icon", href: "/img/logo.png" }]],
  dest: "public",
  base: "/",
  plugins: [
    [
      "vuepress-plugin-auto-sidebar",
      {
        sidebarDepth: 2,
      },
    ],
    [
      "vuepress-plugin-mathjax",
      {
        target: "svg",
        macros: {
          "*": "\\times",
        },
      },
    ],
    ["vuepress-plugin-smooth-scroll"],
  ],
  markdowm: {
    lineNumbers: true,
  },
  themeConfig: {
    lastUpdated: "Last Updated",
    repo: "https://github.com/AndPuQing/WorkSpace",
    logo: "/img/logo.png",
    nav: [
      {
        text: "日常",
        link: "/everyday/",
      },
      {
        text: "魔法",
        link: "/magic/",
      },
      {
        text: "不学习",
        items: [
          {
            text: "数据结构与算法",
            link: "/study/algorithm/",
          },
        ],
      },
    ],
  },
};
