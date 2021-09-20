export const themeData = {
  "logo": "https://vuejs.org/images/logo.png",
  "smoothScroll": true,
  "sidebar": {
    "/study/algorithm/": [
      {
        "text": "Algorithm",
        "title": "Algorithm",
        "collapsable": false,
        "sidebarDepth": 2,
        "children": [
          "README.md",
          "file0.md"
        ]
      }
    ],
    "/guide/": [
      {
        "text": "Guide",
        "title": "Guide",
        "collapsable": false,
        "sidebarDepth": 2,
        "children": [
          "README.md",
          "page.md"
        ]
      }
    ]
  },
  "repo": "AndPuQing/WorkSpace",
  "editLinkText": "在Github上编辑此页",
  "navbar": [
    {
      "text": "主页",
      "link": "/"
    },
    {
      "text": "指南",
      "link": "/guide/"
    },
    {
      "text": "生活",
      "link": "/life"
    },
    {
      "text": "魔法日常",
      "link": "/dl/"
    },
    {
      "text": "学习",
      "children": [
        {
          "text": "算法与数据结构",
          "link": "/study/algorithm/"
        }
      ]
    }
  ],
  "locales": {
    "/": {
      "selectLanguageName": "English"
    }
  },
  "darkMode": true,
  "selectLanguageText": "Languages",
  "selectLanguageAriaLabel": "Select language",
  "sidebarDepth": 2,
  "editLink": true,
  "lastUpdated": true,
  "lastUpdatedText": "Last Updated",
  "contributors": true,
  "contributorsText": "Contributors",
  "notFound": [
    "There's nothing here.",
    "How did we get here?",
    "That's a Four-Oh-Four.",
    "Looks like we've got some broken links."
  ],
  "backToHome": "Take me home",
  "openInNewWindow": "open in new window",
  "toggleDarkMode": "toggle dark mode",
  "toggleSidebar": "toggle sidebar"
}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateThemeData) {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ themeData }) => {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  })
}
