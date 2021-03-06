module.exports = {
  router: {
    // base: '/node/'
  },
  /*
  ** Headers of the page
  */

  head: {
    title: 'shawbosen',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    script: [
      { src: '/lib/jquery.min.js'},
      { src: '/lib/popper.min.js'},
      { src: '/lib/bootstrap.min.js'},
      { src: '/lib/simplemde.min.js'},
      { src: '/lib/jquery.minicolors.min.js'},
      { src: '/lib/bootstrap-datetimepicker.min.js'}
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: '/lib/font-awesome.min.css'},
      { rel: 'stylesheet', href: '/lib/bootstrap.min.css' },
      { rel: 'stylesheet', href: '/lib/simplemde.min.css'},
      { rel: 'stylesheet', href: '/lib/jquery.minicolors.css'},
      { rel: 'stylesheet', href: '/lib/bootstrap-datetimepicker.min.css'}
    ]
  },
  css: [
    // // 加载一个 node.js 模块
    // 'hover.css/css/hover-min.css',
    // // 同样加载一个 node.js 模块，不过我们定义所需的预处理器
    // { src: 'bulma', lang: 'sass' },
    // // 项目中的 CSS 文件
    // '~assets/scss/style.css',
    // 项目中的 Sass 文件
    { src: '~assets/scss/style.scss', lang: 'scss' } // 指定 scss 而非 sass
  ],
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#cc6699' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend(config,ctx){  
      const sassResourcesLoader = {  
        loader: 'sass-resources-loader',  
        options: {  
          resources: [  
           'assets/scss/style.scss'  
          ]  
        }  
      }  
      // 遍历nuxt定义的loader配置，向里面添加新的配置。  
      config.module.rules.forEach((rule) => {  
        if (rule.test.toString() === '/\\.vue$/') {  
          rule.options.loaders.sass.push(sassResourcesLoader)  
          rule.options.loaders.scss.push(sassResourcesLoader)  
        }  
        if (['/\\.sass$/', '/\\.scss$/'].indexOf(rule.test.toString()) !== -1) {  
          rule.use.push(sassResourcesLoader)  
        }  
      })  

    }
  }

  
}
