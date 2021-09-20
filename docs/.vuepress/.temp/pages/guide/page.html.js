export const data = {
  "key": "v-4eaf9f84",
  "path": "/guide/page.html",
  "title": "asd",
  "lang": "zh-CN",
  "frontmatter": {},
  "excerpt": "",
  "headers": [],
  "filePathRelative": "guide/page.md",
  "git": {
    "updatedTime": 1632145970000,
    "contributors": [
      {
        "name": "AndPuqing",
        "email": "1569540783@qq.com",
        "commits": 1
      }
    ]
  }
}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
