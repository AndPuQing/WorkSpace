module.exports = {
  title: "Hello VuePress",
  description: "Just playing around",
  dest: "./dist",
  base: "/",
  plugins: [
    ["vuepress-plugin-auto-sidebar", {}],
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
  themeConfig: {
    nav: [
      {
        text: "日常",
        link: "/everyday/",
      },
      {
        text: "学习",
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
