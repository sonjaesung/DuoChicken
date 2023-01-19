export const navigation = [
  {
    title: '브랜드 소개',
    desc: '브랜드 소개',
    url: '/company',
    matchUrl: ['/company'],
    menu: 'Company',
    subnav: [
      { url: '/company/about', name: '듀오치킨 소개', desc: '듀오치킨 소개' },
      { url: '/company/about', name: '듀오치킨 컨샙', desc: '듀오치킨 컨샙' },
      { url: '/company/about', name: '듀오치킨 BI', desc: '듀오치킨 BI' },
    ],
  },
  {
    title: '메뉴 안내',
    desc: '메뉴 안내',
    url: '/menu',
    matchUrl: ['/menu'],
    menu: 'Menu',
    subnav: [
      { url: '/menu/product', name: '전체 메뉴', desc: '듀오치킨 소개' },
    ],
  },
  {
    title: '창업 안내',
    desc: '창업 안내',
    url: '/startup',
    matchUrl: ['/startup'],
    menu: 'Startup',
    subnav: [
      { url: '/startup/why', name: '왜 듀오치킨인가', desc: '왜 듀오치킨인가' },
    ],
  },
  {
    title: '매장 찾기',
    desc: '매장 찾기',
    url: '/store',
    matchUrl: ['/store'],
    menu: 'Store',
  },
];

export const sua = [
  {
    title: '회사 소개',
    desc: '회사 소개',
    url: '/company/company',
    matchUrl: ['/company/company'],
    menu: 'Company',
  },
  {
    title: 'NEWS',
    desc: 'NEWS',
    url: '/news/press',
    matchUrl: ['/news/press'],
    menu: 'News',
  },
  {
    title: '이벤트',
    desc: '이벤트',
    url: '/news/event',
    matchUrl: ['/news/event'],
    menu: 'Event',
  }
]