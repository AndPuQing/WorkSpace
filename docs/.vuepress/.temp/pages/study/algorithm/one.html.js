export const data = {
  "key": "v-5be5c9d2",
  "path": "/study/algorithm/one.html",
  "title": "asdf",
  "lang": "zh-CN",
  "frontmatter": {
    "title": "asdf"
  },
  "excerpt": "",
  "headers": [],
  "filePathRelative": "study/algorithm/one.md",
  "git": {}
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
