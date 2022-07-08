import fs from 'fs'
import path from 'path'
import { defineConfigWithTheme } from 'vitepress'
import type { Config as ThemeConfig } from '@vue/theme'
import baseConfig from '@vue/theme/config'
import { headerPlugin } from './headerMdPlugin'

// 顶部导航
const nav = [
  {
    text: '指南',
    link: '/guide/introduction',
    activeMatch: `^/guide/`
  },
  {
    text: '组件',
    // link: '/components/',
    activeMatch: `^/(components|components-m)/`,
    items: [
      { text: 'PC端组件', link: '/components/' },
      { text: '移动端组件', link: '/components-m/test' }
    ]
  },
  {
    text: '资源',
    link: '/resource/',
    activeMatch: `^/resource/`
  }
]

// 侧边栏导航
export const sidebar = {
  '/guide/': [
    {
      text: '指南',
      items: [
        {
          text: '介绍',
          link: '/guide/introduction'
        },
        {
          text: 'markdown',
          link: '/guide/markdown'
        }
      ]
    }
  ],
  '/components/': [
    {
      text: '轮播图',
      items: [
        {
          text: 'VUE-slider',
          link: '/components/#slider'
        },
        {
          text: 'JQ-slider',
          link: '/components/jquery/jqslider'
        }
      ]
    }
  ],
  '/components-m/': [
    {
      text: '轮播图',
      items: [
        {
          text: 'test',
          link: '/components-m/test'
        }
      ]
    }
  ]
}

export default defineConfigWithTheme<ThemeConfig>({
  extends: baseConfig,

  lang: 'en-US',
  title: 'ui.cc',
  description: '前端组件库平台',
  srcDir: 'src',
  srcExclude: ['tutorial/**/description.md'],
  scrollOffset: 'header',

  head: [
    ['link', { rel: 'icon', href: '/favicon.png' }],
    [
      'script',
      {},
      fs.readFileSync(
        path.resolve(__dirname, './inlined-scripts/restorePreference.js'),
        'utf-8'
      )
    ],
    [
      'script',
      {
        src: 'https://cdn.usefathom.com/script.js',
        'data-site': 'XNOLWPLB',
        'data-spa': 'auto',
        defer: ''
      }
    ]
  ],

  themeConfig: {
    nav,
    sidebar,

    algolia: {
      indexName: 'hqui',
      appId: 'AFTTBL2D4D',
      apiKey: '75ca20256f27def46361447948ec2932',
      // searchParameters: {
      //   facetFilters: ['version:v3']
      // }
    },

    // carbonAds: {
    //   code: 'CEBDT27Y',
    //   placement: 'vuejsorg'
    // },

    socialLinks: [
      // { icon: 'github', link: 'https://github.com/vuejs/' },
    ],

    footer: {
      copyright: `Copyright ©${new Date().getFullYear()} www.ui.cc`
    }
  },

  markdown: {
    config(md) {
      md.use(headerPlugin)
    }
  },

  vite: {
    define: {
      __VUE_OPTIONS_API__: false
    },
    optimizeDeps: {
      include: ['gsap', 'dynamics.js'],
      exclude: ['@vue/repl']
    },
    // @ts-ignore
    ssr: {
      external: ['@vue/repl']
    },
    server: {
      host: true,
      fs: {
        // for when developing with locally linked theme
        allow: ['../..']
      }
    },
    build: {
      minify: 'terser',
      chunkSizeWarningLimit: Infinity
    },
    json: {
      stringify: true
    }
  },

  vue: {
    reactivityTransform: true
  }
})
