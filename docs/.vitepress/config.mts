import { defineConfig, type DefaultTheme } from 'vitepress'

const localeRedirectScript = `(() => {
  const path = window.location.pathname;
  const storageKey = 'signa-index-docs-locale';
  const chineseLocale = 'zh-CN';
  const englishLocale = 'en';

  const rememberLocaleFromPath = (pathname) => {
    if (pathname === '/zh-CN' || pathname.startsWith('/zh-CN/')) {
      localStorage.setItem(storageKey, chineseLocale);
      return;
    }

    if (pathname === '/' || pathname === '/index.html') {
      localStorage.setItem(storageKey, englishLocale);
    }
  };

  document.addEventListener('click', (event) => {
    const target = event.target;
    if (!(target instanceof Element)) return;

    const link = target.closest('a[href]');
    if (!link) return;

    const href = link.getAttribute('href');
    if (!href || !href.startsWith('/')) return;
    rememberLocaleFromPath(href);
  }, { capture: true });

  if (path === '/zh-CN' || path.startsWith('/zh-CN/')) {
    localStorage.setItem(storageKey, chineseLocale);
    return;
  }

  if (path !== '/' && path !== '/index.html') return;

  const storedLocale = localStorage.getItem(storageKey);
  if (storedLocale === englishLocale) return;
  if (storedLocale === chineseLocale) {
    window.location.replace('/zh-CN/');
    return;
  }

  const browserLocales = Array.isArray(navigator.languages) && navigator.languages.length
    ? navigator.languages
    : [navigator.language];
  const prefersChinese = browserLocales.some((locale) =>
    typeof locale === 'string' && locale.toLowerCase().startsWith('zh')
  );

  if (prefersChinese) window.location.replace('/zh-CN/');
})();`

const zhSidebar: DefaultTheme.SidebarItem[] = [
  {
    text: '使用指南',
    items: [
      { text: '开始使用', link: '/zh-CN/guide/' },
      { text: '充值与提现', link: '/zh-CN/guide/funding' },
      { text: '如何交易', link: '/zh-CN/guide/trading' },
      { text: '费用说明', link: '/zh-CN/guide/fees' },
      { text: '收益、亏损与指数归零', link: '/zh-CN/guide/returns-and-zero' },
      { text: '资金如何保管与保护', link: '/zh-CN/guide/security' },
      { text: '充提问题排查', link: '/zh-CN/guide/troubleshooting' },
    ],
  },
  {
    text: '首发指数',
    items: [
      { text: '六个首发指数', link: '/zh-CN/indexes/' },
      { text: '国家发展', link: '/zh-CN/indexes/country-development' },
      { text: '地缘秩序', link: '/zh-CN/indexes/geopolitical-order' },
      { text: '政治权力', link: '/zh-CN/indexes/political-power' },
      { text: '技术演进', link: '/zh-CN/indexes/technology-evolution' },
    ],
  },
  {
    text: '了解 Signa',
    items: [
      { text: '什么是 Signa Index', link: '/zh-CN/overview/what-is-signa-index' },
      { text: '为什么需要世界状态指数', link: '/zh-CN/overview/why-world-state-index' },
      { text: 'Signa Index 如何运作', link: '/zh-CN/overview/how-it-works' },
    ],
  },
  {
    text: '产品与风险',
    items: [
      { text: '指数与指数份额', link: '/zh-CN/products/index-and-products' },
      { text: '双向敞口', link: '/zh-CN/products/long-short-exposure' },
      { text: '风险与适用性', link: '/zh-CN/products/risks' },
    ],
  },
  {
    text: '核心概念',
    items: [
      { text: '世界状态', link: '/zh-CN/concepts/world-state' },
      { text: '事件合约', link: '/zh-CN/concepts/event-contracts' },
      { text: '状态方向', link: '/zh-CN/concepts/direction-mapping' },
      { text: '状态暴露', link: '/zh-CN/concepts/state-exposure' },
      { text: '连续指数', link: '/zh-CN/concepts/continuous-index' },
    ],
  },
  {
    text: '指数构建',
    items: [
      { text: '构建流程', link: '/zh-CN/methodology/overview' },
      { text: '目标状态定义', link: '/zh-CN/methodology/objective-definition' },
      { text: '成分选择', link: '/zh-CN/methodology/component-selection' },
      { text: '状态暴露与权重', link: '/zh-CN/methodology/exposure-weighting' },
      { text: '指数计算', link: '/zh-CN/methodology/calculation' },
      { text: '审查与再平衡', link: '/zh-CN/methodology/rebalancing' },
      { text: '到期与滚动接续', link: '/zh-CN/methodology/rolling' },
      { text: '反向指数', link: '/zh-CN/methodology/inverse-index' },
    ],
  },
  {
    text: '数据与 AI',
    items: [
      { text: '数据来源', link: '/zh-CN/data-and-ai/data-sources' },
      { text: 'AI 世界状态发现', link: '/zh-CN/data-and-ai/world-state-mapping' },
      { text: '数据质量', link: '/zh-CN/data-and-ai/data-quality' },
    ],
  },
  {
    text: '参考资料',
    items: [
      { text: '术语表', link: '/zh-CN/reference/glossary' },
      { text: '公式汇总', link: '/zh-CN/reference/formulas' },
      { text: '常见问题', link: '/zh-CN/reference/faq' },
      { text: '产品规则与声明', link: '/zh-CN/reference/disclosures' },
    ],
  },
]

export default defineConfig({
  title: 'Signa Index',
  description: 'Documentation for the Signa World-State Index system.',
  cleanUrls: true,
  lastUpdated: true,
  markdown: {
    math: true,
  },
  head: [
    ['script', {}, localeRedirectScript],
    ['meta', { name: 'theme-color', content: '#121814' }],
  ],
  locales: {
    root: {
      label: 'English',
      lang: 'en',
      themeConfig: {
        nav: [
          { text: '中文', link: '/zh-CN/' },
        ],
        sidebar: [],
        outline: { label: 'On this page' },
        docFooter: { prev: 'Previous', next: 'Next' },
        lastUpdated: { text: 'Last updated' },
      },
    },
    'zh-CN': {
      label: '简体中文',
      lang: 'zh-CN',
      link: '/zh-CN/',
      themeConfig: {
        nav: [
          { text: '开始使用', link: '/zh-CN/guide/' },
          { text: '首发指数', link: '/zh-CN/indexes/' },
          { text: '了解 Signa', link: '/zh-CN/overview/what-is-signa-index' },
          { text: '指数构建', link: '/zh-CN/methodology/overview' },
        ],
        sidebar: zhSidebar,
        outline: { label: '本页目录', level: [2, 3] },
        docFooter: { prev: '上一页', next: '下一页' },
        lastUpdated: { text: '最后更新' },
        returnToTopLabel: '返回顶部',
        sidebarMenuLabel: '菜单',
        darkModeSwitchLabel: '外观',
      },
    },
  },
  themeConfig: {
    logo: false,
    search: { provider: 'local' },
    socialLinks: [
      {
        icon: {
          svg: '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Signa Index Website</title><circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" stroke-width="2"/><path d="M2.8 12h18.4" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><path d="M12 2c2.9 2.7 4.6 6.2 4.6 10s-1.7 7.3-4.6 10c-2.9-2.7-4.6-6.2-4.6-10S9.1 4.7 12 2Z" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/></svg>',
        },
        link: 'https://signaindex.com/',
      },
      { icon: 'x', link: 'https://x.com/Signamarket' },
      {
        icon: {
          svg: '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Medium</title><path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z"/></svg>',
        },
        link: 'https://medium.com/@signamarkets',
      },
    ],
    footer: {
      message: 'Prediction markets price events. Signa indexes the state of the world.',
      copyright: 'Signa Index',
    },
  },
})
