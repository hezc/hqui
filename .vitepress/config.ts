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
        },
        {
          text: 'JQ-图片3D轮播效果',
          link: '/components/jquery/imgCarousel3D'
        },
        {
          text: 'JQ-焦点图+缩略图',
          link: '/components/jquery/focusImage1'
        },
        {
          text: 'JQ-图片横向切换',
          link: '/components/jquery/imgHorizontalSwitch'
        }
        
      ]
    },
    {
      text: '图片预览',
      items: [
        {
          text: 'JQ-手风琴效果',
          link: '/components/jquery/accordion'
        },
        {
          text: 'JQ-预览大图',
          link: '/components/jquery/imgViewer'
        },
        {
          text: 'JQ-倾斜图片切换+预览',
          link: '/components/jquery/swiperPictureToggle'
        },
        {
          text: 'JQ-晒图+预览',
          link: '/components/jquery/imgBlueprint'
        },
        {
          text: 'JQ-缩略图+预览',
          link: '/components/jquery/imgPreview'
        }
        
      ]
    },
    {
      text: '活动抽奖',
      items: [
        {
          text: 'JQ-转盘抽奖',
          link: '/components/jquery/lotteryTurntable'
        },
        {
          text: 'JQ-随机抽奖',
          link: '/components/jquery/lotteryShuiji'
        },
        {
          text: 'JQ-翻牌抽奖',
          link: '/components/jquery/lotteryFanpai'
        },
        {
          text: 'JQ-滚动手机号抽奖',
          link: '/components/jquery/lotteryPhone'
        },
        {
          text: 'JQ-仿双色球抽奖',
          link: '/components/jquery/lotteryShuangseqiu'
        },
        {
          text: 'JQ-仿老虎机抽奖',
          link: '/components/jquery/lotteryLaohuji'
        },
        {
          text: 'JQ-九宫格抽奖',
          link: '/components/jquery/lotteryJiugongge'
        }
      ]
    },
    {
      text: 'CSS动画',
      items: [
        {
          text: 'JQ-aminate动画库',
          link: '/components/jquery/animate'
        }
      ]
    },
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

  base: '/hqui/',
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
      indexName: 'testui',
      appId: 'AFTTBL2D4D',
      apiKey: 'ed6081ccf8daa5a6c863e45a8f1bc0fc'
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
