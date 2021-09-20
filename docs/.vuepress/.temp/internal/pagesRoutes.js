import { Vuepress } from '@vuepress/client/lib/components/Vuepress'

const routeItems = [
  ["v-6ce48554","/contributing.html","",["/contributing","/contributing.md"]],
  ["v-8daa1a0e","/","",["/index.html","/README.md"]],
  ["v-4eaf9f84","/guide/page.html","asd",["/guide/page","/guide/page.md"]],
  ["v-fffb8e28","/guide/","",["/guide/index.html","/guide/README.md"]],
  ["v-4ee28304","/study/algorithm/file0.html","哎呀",["/study/algorithm/file0","/study/algorithm/file0.md"]],
  ["v-3958369f","/study/algorithm/","OJ刷题纪",["/study/algorithm/index.html","/study/algorithm/README.md"]],
  ["v-3706649a","/404.html","",["/404"]],
]

export const pagesRoutes = routeItems.reduce(
  (result, [name, path, title, redirects]) => {
    result.push(
      {
        name,
        path,
        component: Vuepress,
        meta: { title },
      },
      ...redirects.map((item) => ({
        path: item,
        redirect: path,
      }))
    )
    return result
  },
  [
    {
      name: "404",
      path: "/:catchAll(.*)",
      component: Vuepress,
    }
  ]
)
