const sidebarConf = require("./sidebar");
module.exports = {
  lang: "zh-CN",
  title: "PuQing `s WareHouse",
  description: "PuQing的记录簿",
  plugins: [
    [
      "vuepress-plugin-auto-sidebar",
      {
        sort: {
          mode: "asc",
          readmeFirst: true,
          readmeFirstForce: false,
        },
        title: {
          mode: "titlecase",
          map: {},
        },
        sidebarDepth: 2,
        collapse: {
          open: false,
          collapseList: [],
          uncollapseList: [],
        },
        ignore: [],
      },
      '@vuepress/last-updated'
    ],
  ],
  themeConfig: {
    logo: "https://vuejs.org/images/logo.png",
    smoothScroll: true,
    sidebar: sidebarConf,
    editLink: true,
    repo: 'AndPuQing/KnowSpace',
    editLinkText: '在Github上编辑此页',
    lastUpdated: true,
    navbar: [
      // NavbarItem
      { text: "主页", link: "/" },
      { text: "指南", link: "/guide/" },
      { text: "生活", link: "/life" },
      { text: "魔法日常", link: "/dl/" },
      {
        text: "学习",
        children: [{ text: "算法与数据结构", link: "/study/algorithm/" }],
      },
    ],
  },
};
