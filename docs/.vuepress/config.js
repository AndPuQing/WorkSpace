const sidebarConf = require("./sidebar");
module.exports = {
  lang: "zh-CN",
  title: "PuQing `s WareHouse",
  description: "PuQing的记录簿",
  plugins: [
    //自动生成侧边
    [
      "vuepress-plugin-auto-sidebar",
      {
        sort: {
          mode: "created_time_desc",
          readmeFirst: true,
          readmeFirstForce: false,
        },
        sidebarDepth: 10,
      },
    ],
    // 更新刷新插件
    [
      "@vuepress/pwa",
      {
        serviceWorker: true,
        updatePopup: {
          message: "发现新内容可用",
          buttonText: "刷新",
        },
      },
    ],
  ],
  themeConfig: {
    logo: "https://vuejs.org/images/logo.png",
    smoothScroll: true,
    sidebar: sidebarConf,
    repo: "AndPuQing/WorkSpace",
    editLinkText: "在Github上编辑此页",
    navbar: [
      // NavbarItem
      { text: "主页", link: "/" },
      { text: "日常", link: "/everday/" },
      { text: "魔法日常", link: "/dl/" },
      {
        text: "学习",
        children: [{ text: "算法与数据结构", link: "/study/algorithm/" }],
      },
    ],
  },
};
