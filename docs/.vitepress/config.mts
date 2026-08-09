import { defineConfig, type DefaultTheme } from 'vitepress'

const localeRedirectScript = `(() => {
  const path = window.location.pathname;
  const storageKey = 'signa-index-docs-locale';
  const localePaths = {
    'zh-CN': '/zh-CN/',
    'zh-TW': '/zh-TW/',
    ja: '/ja/',
    ko: '/ko/',
    en: '/',
  };

  const rememberLocaleFromPath = (pathname) => {
    for (const locale of ['zh-CN', 'zh-TW', 'ja', 'ko']) {
      if (pathname === '/' + locale || pathname.startsWith('/' + locale + '/')) {
        localStorage.setItem(storageKey, locale);
        return locale;
      }
    }

    if (pathname.startsWith('/')) {
      localStorage.setItem(storageKey, 'en');
      return 'en';
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

  if (['zh-CN', 'zh-TW', 'ja', 'ko'].some((locale) => path === '/' + locale || path.startsWith('/' + locale + '/'))) {
    rememberLocaleFromPath(path);
    return;
  }

  if (path !== '/' && path !== '/index.html') {
    localStorage.setItem(storageKey, 'en');
    return;
  }

  const storedLocale = localStorage.getItem(storageKey);
  if (storedLocale === 'en') return;
  if (storedLocale && localePaths[storedLocale]) {
    window.location.replace(localePaths[storedLocale]);
    return;
  }

  const browserLocales = Array.isArray(navigator.languages) && navigator.languages.length
    ? navigator.languages
    : [navigator.language];
  const normalized = browserLocales
    .filter((locale) => typeof locale === 'string')
    .map((locale) => locale.toLowerCase());
  const preferred = normalized.find((locale) =>
    locale.startsWith('zh') || locale.startsWith('ja') || locale.startsWith('ko')
  );

  if (!preferred) return;
  if (preferred.startsWith('ja')) window.location.replace('/ja/');
  else if (preferred.startsWith('ko')) window.location.replace('/ko/');
  else if (/^zh-(tw|hk|mo|hant)/.test(preferred)) window.location.replace('/zh-TW/');
  else window.location.replace('/zh-CN/');
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

const enSidebar: DefaultTheme.SidebarItem[] = [
  {
    text: 'Overview',
    items: [
      { text: 'What is Signa Index?', link: '/overview/what-is-signa-index' },
      { text: 'Why World-State Indexes?', link: '/overview/why-world-state-index' },
      { text: 'How Signa Index Works', link: '/overview/how-it-works' },
    ],
  },
  {
    text: 'User Guide',
    items: [
      { text: 'Getting Started', link: '/guide/' },
      { text: 'Deposits & Withdrawals', link: '/guide/funding' },
      { text: 'How to Trade', link: '/guide/trading' },
      { text: 'Fees', link: '/guide/fees' },
      { text: 'Returns, Losses & Zero', link: '/guide/returns-and-zero' },
      { text: 'Fund Protection', link: '/guide/security' },
      { text: 'Funding Troubleshooting', link: '/guide/troubleshooting' },
    ],
  },
  {
    text: 'Launch Indexes',
    items: [
      { text: 'Six Launch Indexes', link: '/indexes/' },
      { text: 'Country Development', link: '/indexes/country-development' },
      { text: 'Geopolitical Order', link: '/indexes/geopolitical-order' },
      { text: 'Political Power', link: '/indexes/political-power' },
      { text: 'Technology Evolution', link: '/indexes/technology-evolution' },
    ],
  },
  {
    text: 'Product & Risk',
    items: [
      { text: 'Indexes & Index Shares', link: '/products/index-and-products' },
      { text: 'Long & Short Exposure', link: '/products/long-short-exposure' },
      { text: 'Risks & Suitability', link: '/products/risks' },
    ],
  },
  {
    text: 'Core Concepts',
    items: [
      { text: 'World State', link: '/concepts/world-state' },
      { text: 'Event Contracts', link: '/concepts/event-contracts' },
      { text: 'State Direction', link: '/concepts/direction-mapping' },
      { text: 'State Exposure', link: '/concepts/state-exposure' },
      { text: 'Continuous Index', link: '/concepts/continuous-index' },
    ],
  },
  {
    text: 'Index Construction',
    items: [
      { text: 'Construction Process', link: '/methodology/overview' },
      { text: 'Target-State Definition', link: '/methodology/objective-definition' },
      { text: 'Component Selection', link: '/methodology/component-selection' },
      { text: 'Exposure & Weighting', link: '/methodology/exposure-weighting' },
      { text: 'Index Calculation', link: '/methodology/calculation' },
      { text: 'Review & Rebalancing', link: '/methodology/rebalancing' },
      { text: 'Expiry & Rolling', link: '/methodology/rolling' },
      { text: 'Short Index', link: '/methodology/inverse-index' },
    ],
  },
  {
    text: 'Data & AI',
    items: [
      { text: 'Data Sources', link: '/data-and-ai/data-sources' },
      { text: 'AI World-State Discovery', link: '/data-and-ai/world-state-mapping' },
      { text: 'Data Quality', link: '/data-and-ai/data-quality' },
    ],
  },
  {
    text: 'Reference',
    items: [
      { text: 'Glossary', link: '/reference/glossary' },
      { text: 'Formula Reference', link: '/reference/formulas' },
      { text: 'FAQ', link: '/reference/faq' },
      { text: 'Product Rules & Disclosures', link: '/reference/disclosures' },
    ],
  },
]

const localizedSidebar = (
  locale: string,
  groups: Array<{ text: string; items: Array<[string, string]> }>,
): DefaultTheme.SidebarItem[] => groups.map((group) => ({
  text: group.text,
  items: group.items.map(([text, link]) => ({ text, link: `/${locale}${link}` })),
}))

const zhTwSidebar = localizedSidebar('zh-TW', [
  { text: '概覽', items: [['什麼是 Signa Index', '/overview/what-is-signa-index'], ['為什麼需要世界狀態指數', '/overview/why-world-state-index'], ['Signa Index 如何運作', '/overview/how-it-works']] },
  { text: '使用指南', items: [['開始使用', '/guide/'], ['充值與提現', '/guide/funding'], ['如何交易', '/guide/trading'], ['費用說明', '/guide/fees'], ['收益、虧損與指數歸零', '/guide/returns-and-zero'], ['資金如何保管與保護', '/guide/security'], ['充提問題排查', '/guide/troubleshooting']] },
  { text: '首發指數', items: [['六個首發指數', '/indexes/'], ['國家發展', '/indexes/country-development'], ['地緣秩序', '/indexes/geopolitical-order'], ['政治權力', '/indexes/political-power'], ['技術演進', '/indexes/technology-evolution']] },
  { text: '產品與風險', items: [['指數與指數份額', '/products/index-and-products'], ['雙向曝險', '/products/long-short-exposure'], ['風險與適用性', '/products/risks']] },
  { text: '核心概念', items: [['世界狀態', '/concepts/world-state'], ['事件合約', '/concepts/event-contracts'], ['狀態方向', '/concepts/direction-mapping'], ['狀態曝險', '/concepts/state-exposure'], ['連續指數', '/concepts/continuous-index']] },
  { text: '指數構建', items: [['構建流程', '/methodology/overview'], ['目標狀態定義', '/methodology/objective-definition'], ['成分選擇', '/methodology/component-selection'], ['狀態曝險與權重', '/methodology/exposure-weighting'], ['指數計算', '/methodology/calculation'], ['審查與再平衡', '/methodology/rebalancing'], ['到期與滾動接續', '/methodology/rolling'], ['反向指數', '/methodology/inverse-index']] },
  { text: '資料與 AI', items: [['資料來源', '/data-and-ai/data-sources'], ['AI 世界狀態發現', '/data-and-ai/world-state-mapping'], ['資料品質', '/data-and-ai/data-quality']] },
  { text: '參考資料', items: [['術語表', '/reference/glossary'], ['公式彙總', '/reference/formulas'], ['常見問題', '/reference/faq'], ['產品規則與聲明', '/reference/disclosures']] },
])

const jaSidebar = localizedSidebar('ja', [
  { text: '概要', items: [['Signa Indexとは', '/overview/what-is-signa-index'], ['世界状態指数が必要な理由', '/overview/why-world-state-index'], ['Signa Indexの仕組み', '/overview/how-it-works']] },
  { text: '利用ガイド', items: [['はじめに', '/guide/'], ['入金と出金', '/guide/funding'], ['取引方法', '/guide/trading'], ['手数料', '/guide/fees'], ['リターン・損失・指数のゼロ', '/guide/returns-and-zero'], ['資金の保管と保護', '/guide/security'], ['入出金のトラブルシューティング', '/guide/troubleshooting']] },
  { text: 'ローンチ指数', items: [['6つのローンチ指数', '/indexes/'], ['国家発展', '/indexes/country-development'], ['地政学的秩序', '/indexes/geopolitical-order'], ['政治権力', '/indexes/political-power'], ['技術進化', '/indexes/technology-evolution']] },
  { text: '商品とリスク', items: [['指数と指数持分', '/products/index-and-products'], ['ロングとショートのエクスポージャー', '/products/long-short-exposure'], ['リスクと適合性', '/products/risks']] },
  { text: '基本概念', items: [['世界状態', '/concepts/world-state'], ['イベント契約', '/concepts/event-contracts'], ['状態方向', '/concepts/direction-mapping'], ['状態エクスポージャー', '/concepts/state-exposure'], ['連続指数', '/concepts/continuous-index']] },
  { text: '指数構築', items: [['構築プロセス', '/methodology/overview'], ['対象状態の定義', '/methodology/objective-definition'], ['構成要素の選定', '/methodology/component-selection'], ['エクスポージャーと重み付け', '/methodology/exposure-weighting'], ['指数計算', '/methodology/calculation'], ['レビューとリバランス', '/methodology/rebalancing'], ['満期とローリング', '/methodology/rolling'], ['ショート指数', '/methodology/inverse-index']] },
  { text: 'データと AI', items: [['データソース', '/data-and-ai/data-sources'], ['AI 世界状態ディスカバリー', '/data-and-ai/world-state-mapping'], ['データ品質', '/data-and-ai/data-quality']] },
  { text: 'リファレンス', items: [['用語集', '/reference/glossary'], ['数式一覧', '/reference/formulas'], ['よくある質問', '/reference/faq'], ['商品ルールと開示', '/reference/disclosures']] },
])

const koSidebar = localizedSidebar('ko', [
  { text: '개요', items: [['Signa Index란?', '/overview/what-is-signa-index'], ['세계 상태 지수가 필요한 이유', '/overview/why-world-state-index'], ['Signa Index 작동 방식', '/overview/how-it-works']] },
  { text: '사용 가이드', items: [['시작하기', '/guide/'], ['입금 및 출금', '/guide/funding'], ['거래 방법', '/guide/trading'], ['수수료', '/guide/fees'], ['수익·손실·지수의 0 도달', '/guide/returns-and-zero'], ['자금 보관 및 보호', '/guide/security'], ['입출금 문제 해결', '/guide/troubleshooting']] },
  { text: '출시 지수', items: [['6개 출시 지수', '/indexes/'], ['국가 발전', '/indexes/country-development'], ['지정학적 질서', '/indexes/geopolitical-order'], ['정치 권력', '/indexes/political-power'], ['기술 진화', '/indexes/technology-evolution']] },
  { text: '상품 및 위험', items: [['지수와 지수 지분', '/products/index-and-products'], ['롱·숏 익스포저', '/products/long-short-exposure'], ['위험 및 적합성', '/products/risks']] },
  { text: '핵심 개념', items: [['세계 상태', '/concepts/world-state'], ['이벤트 계약', '/concepts/event-contracts'], ['상태 방향', '/concepts/direction-mapping'], ['상태 익스포저', '/concepts/state-exposure'], ['연속 지수', '/concepts/continuous-index']] },
  { text: '지수 구성', items: [['구성 절차', '/methodology/overview'], ['목표 상태 정의', '/methodology/objective-definition'], ['구성 요소 선정', '/methodology/component-selection'], ['익스포저 및 가중치', '/methodology/exposure-weighting'], ['지수 계산', '/methodology/calculation'], ['검토 및 리밸런싱', '/methodology/rebalancing'], ['만기 및 롤링', '/methodology/rolling'], ['숏 지수', '/methodology/inverse-index']] },
  { text: '데이터 및 AI', items: [['데이터 소스', '/data-and-ai/data-sources'], ['AI 세계 상태 발견', '/data-and-ai/world-state-mapping'], ['데이터 품질', '/data-and-ai/data-quality']] },
  { text: '참고 자료', items: [['용어집', '/reference/glossary'], ['공식 모음', '/reference/formulas'], ['자주 묻는 질문', '/reference/faq'], ['상품 규칙 및 고지', '/reference/disclosures']] },
])

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
          { text: 'Overview', link: '/overview/what-is-signa-index' },
          { text: 'Get Started', link: '/guide/' },
          { text: 'Indexes', link: '/indexes/' },
          { text: 'Index Construction', link: '/methodology/overview' },
        ],
        sidebar: enSidebar,
        outline: { label: 'On this page', level: [2, 3] },
        docFooter: { prev: 'Previous', next: 'Next' },
        lastUpdated: { text: 'Last updated' },
        returnToTopLabel: 'Return to top',
        sidebarMenuLabel: 'Menu',
        darkModeSwitchLabel: 'Appearance',
      },
    },
    'zh-CN': {
      label: '简体中文',
      lang: 'zh-CN',
      link: '/zh-CN/',
      themeConfig: {
        nav: [
          { text: '概览', link: '/zh-CN/overview/what-is-signa-index' },
          { text: '开始使用', link: '/zh-CN/guide/' },
          { text: '指数', link: '/zh-CN/indexes/' },
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
    'zh-TW': {
      label: '繁體中文',
      lang: 'zh-TW',
      link: '/zh-TW/',
      themeConfig: {
        nav: [
          { text: '概覽', link: '/zh-TW/overview/what-is-signa-index' },
          { text: '開始使用', link: '/zh-TW/guide/' },
          { text: '指數', link: '/zh-TW/indexes/' },
          { text: '指數構建', link: '/zh-TW/methodology/overview' },
        ],
        sidebar: zhTwSidebar,
        outline: { label: '本頁目錄', level: [2, 3] },
        docFooter: { prev: '上一頁', next: '下一頁' },
        lastUpdated: { text: '最後更新' },
        returnToTopLabel: '返回頂部',
        sidebarMenuLabel: '選單',
        darkModeSwitchLabel: '外觀',
      },
    },
    ja: {
      label: '日本語',
      lang: 'ja',
      link: '/ja/',
      themeConfig: {
        nav: [
          { text: '概要', link: '/ja/overview/what-is-signa-index' },
          { text: 'はじめに', link: '/ja/guide/' },
          { text: '指数', link: '/ja/indexes/' },
          { text: '指数構築', link: '/ja/methodology/overview' },
        ],
        sidebar: jaSidebar,
        outline: { label: 'このページの内容', level: [2, 3] },
        docFooter: { prev: '前へ', next: '次へ' },
        lastUpdated: { text: '最終更新' },
        returnToTopLabel: 'ページ上部へ',
        sidebarMenuLabel: 'メニュー',
        darkModeSwitchLabel: '外観',
      },
    },
    ko: {
      label: '한국어',
      lang: 'ko',
      link: '/ko/',
      themeConfig: {
        nav: [
          { text: '개요', link: '/ko/overview/what-is-signa-index' },
          { text: '시작하기', link: '/ko/guide/' },
          { text: '지수', link: '/ko/indexes/' },
          { text: '지수 구성', link: '/ko/methodology/overview' },
        ],
        sidebar: koSidebar,
        outline: { label: '이 페이지의 내용', level: [2, 3] },
        docFooter: { prev: '이전', next: '다음' },
        lastUpdated: { text: '마지막 업데이트' },
        returnToTopLabel: '맨 위로',
        sidebarMenuLabel: '메뉴',
        darkModeSwitchLabel: '화면 모드',
      },
    },
  },
  themeConfig: {
    logo: '/images/signa-index-logo.png',
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
