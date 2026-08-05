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
    text: '概览',
    items: [
      { text: '什么是 Signa Index', link: '/zh-CN/overview/what-is-signa-index' },
      { text: '为什么需要世界状态指数', link: '/zh-CN/overview/why-world-state-index' },
      { text: 'Signa Index 如何运作', link: '/zh-CN/overview/how-it-works' },
    ],
  },
  {
    text: '使用指南',
    items: [
      { text: '开始使用', link: '/zh-CN/guide/' },
      { text: '充值与提现', link: '/zh-CN/guide/funding' },
      { text: '如何交易', link: '/zh-CN/guide/trading' },
      { text: '费用说明', link: '/zh-CN/guide/fees' },
      { text: '收益、亏损与指数归零', link: '/zh-CN/guide/returns-and-zero' },
      { text: '安全机制与风险边界', link: '/zh-CN/guide/security' },
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
      { text: '世界状态映射', link: '/zh-CN/data-and-ai/world-state-mapping' },
      { text: '数据质量', link: '/zh-CN/data-and-ai/data-quality' },
      { text: '人工监督', link: '/zh-CN/data-and-ai/human-oversight' },
    ],
  },
  {
    text: '指数体系',
    items: [
      { text: '指数总览', link: '/zh-CN/indexes/' },
      { text: '国家发展', link: '/zh-CN/indexes/country-development' },
      { text: '地缘秩序', link: '/zh-CN/indexes/geopolitical-order' },
      { text: '政治权力', link: '/zh-CN/indexes/political-power' },
      { text: '技术演进', link: '/zh-CN/indexes/technology-evolution' },
    ],
  },
  {
    text: '指数挂钩产品',
    items: [
      { text: '指数与产品', link: '/zh-CN/products/index-and-products' },
      { text: '双向敞口', link: '/zh-CN/products/long-short-exposure' },
      { text: '风险与适用性', link: '/zh-CN/products/risks' },
    ],
  },
  {
    text: '治理',
    items: [
      { text: '指数治理', link: '/zh-CN/governance/index-governance' },
      { text: '规则变更', link: '/zh-CN/governance/methodology-changes' },
      { text: '异常事件', link: '/zh-CN/governance/exceptional-events' },
      { text: '版本管理', link: '/zh-CN/governance/versioning' },
    ],
  },
  {
    text: '参考资料',
    items: [
      { text: '术语表', link: '/zh-CN/reference/glossary' },
      { text: '公式汇总', link: '/zh-CN/reference/formulas' },
      { text: '常见问题', link: '/zh-CN/reference/faq' },
      { text: '声明与限制', link: '/zh-CN/reference/disclosures' },
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
          { text: 'Website', link: 'https://signaindex.com/' },
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
          { text: '概览', link: '/zh-CN/overview/what-is-signa-index' },
          { text: '使用指南', link: '/zh-CN/guide/' },
          { text: '指数构建', link: '/zh-CN/methodology/overview' },
          { text: '指数', link: '/zh-CN/indexes/' },
          { text: '数据与 AI', link: '/zh-CN/data-and-ai/world-state-mapping' },
          { text: '官网', link: 'https://signaindex.com/' },
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
    socialLinks: [],
    footer: {
      message: 'Prediction markets price events. Signa indexes the state of the world.',
      copyright: 'Signa Index',
    },
  },
})
