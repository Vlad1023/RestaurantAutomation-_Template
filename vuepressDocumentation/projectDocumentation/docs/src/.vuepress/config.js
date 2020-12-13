const { description } = require('../../package')

module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: 'Система автоматизации ресторанов',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: description,

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    repo: '',
    editLinks: false,
    docsDir: '',
    editLinkText: '',
    lastUpdated: false,
    nav: [
      {
        text: 'Глоссарий',
        link: '/Glossary/',
      },
      {
        text: 'О программе',
        link: '/AboutProgram/'
      },
      {
        text: 'Справочная система',
        link: '/Reference/'
      },
    ],
    sidebar: {
      '/Glossary/': [
        {
          title: 'Глоссарий',
          collapsable: false,
          children: [
            ['Admin','Страница администраторп'],
            ['MainPage','Основная страница пользователя'],
          ]
        }
      ],
      '/AboutProgram/': [
        {
          title: 'О программе',
          collapsable: true,
          children: [
            ['Purpose','Предназначение приложения'],
            ['Author','Автор'],
            ['ProgramUsed','Программные средства']
          ]
        }
      ],
      '/Reference/': [
        {
          title: 'Справочная система',
          collapsable: true,
          children: [
            ['AddDish','Добавить блюдо'],
            ['AddDishToOrder','Добавления блюда в заказ'],
            ['SortDishes','Сортировка блюд'],
            ['OrderEdit','Редактирование заказа'],
            ['OrderPurchase','Оплата заказа'],
            ['LoginAdmin','Вход в кабинет администратора'],
            ['AllOrders','Просмотр заказов из базы данных']
          ]
        }
      ],
    }
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
  ]
}
