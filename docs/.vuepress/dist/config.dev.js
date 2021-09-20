"use strict";

var sidebarConf = require("./sidebar");

module.exports = {
  lang: "zh-CN",
  title: "PuQing `s WareHouse",
  description: "PuQing的记录簿",
  plugins: [//自动生成侧边
  ["vuepress-plugin-auto-sidebar", {
    sort: {
      mode: "created_time_asc",
      readmeFirst: true,
      readmeFirstForce: false
    },
    sidebarDepth: 2
  }], // 更新刷新插件
  ["@vuepress/pwa", {
    serviceWorker: true,
    updatePopup: {
      message: "发现新内容可用",
      buttonText: "刷新"
    }
  }], ["vuepress-plugin-nuggets-style-copy", {
    copyText: "复制代码",
    tip: {
      content: "复制成功!"
    }
  }]],
  themeConfig: {
    logo: "https://vuejs.org/images/logo.png",
    smoothScroll: true,
    sidebar: sidebarConf,
    repo: "AndPuQing/WorkSpace",
    editLinkText: "在Github上编辑此页",
    navbar: [// NavbarItem
    {
      text: "主页",
      link: "/"
    }, {
      text: "指南",
      link: "/guide/"
    }, {
      text: "生活",
      link: "/life"
    }, {
      text: "魔法日常",
      link: "/dl/"
    }, {
      text: "学习",
      children: [{
        text: "算法与数据结构",
        link: "/study/algorithm/"
      }]
    }]
  }
};