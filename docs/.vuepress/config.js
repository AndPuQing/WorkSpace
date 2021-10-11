module.exports = {
  title: "WorkSpace",
  description: "Just playing around",
  head: [
    ["link", { rel: "icon", href: "/img/logo.png" }],
    [
      "link",
      {
        rel: "stylesheet",
        href:
          "https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.7.1/katex.min.css",
      },
    ],
    [
      "link",
      {
        rel: "stylesheet",
        href:
          "https://cdnjs.cloudflare.com/ajax/libs/github-markdown-css/2.10.0/github-markdown.min.css",
      },
    ],
  ],
  dest: "public",
  base: "/",
  markdown: {
    extendMarkdown: (md) => {
      md.set({
        html: true,
      });
      md.use(require("markdown-it-katex"));
    },
  },
  plugins: [
    [
      "vuepress-plugin-auto-sidebar",
      {
        sidebarDepth: 2,
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
          {
            text: "数字逻辑",
            link: "/study/mathlogic/",
          },
        ],
      },
    ],
  },
};
