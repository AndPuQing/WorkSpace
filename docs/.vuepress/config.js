const autometa_options = {
  site: {
    name: "WorkSpace",
  },
  canonical_base: "https://search.puqing.work",
};
module.exports = {
  title: "WorkSpace",
  description: "Just playing around",
  head: [
    ["link", { rel: "icon", href: "/img/logo.png" }],
    [
      "meta",
      {
        name: "google-site-verification",
        content: "qPOsWCBmjvi4JJFnIOnS6tyICFosxmBuX5J3w3lNeu8",
      },
    ],
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
    [
      "sitemap",
      {
        hostname: "https://search.puqing.work",
        // 排除无实际内容的页面
        exclude: ["/404.html"],
      },
    ],
    ["autometa", autometa_options],
    ["vuepress-plugin-smooth-scroll"],
    [
      "vuepress-plugin-zooming",
      {
        delay: 1000,
        options: {
          scrollOffset: 0,
          bgColor: "#ffffff",
        },
      },
    ],
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
          {
            text: "概率论与数理统计",
            link: "/study/statistics/",
          },
        ],
      },
    ],
  },
};
