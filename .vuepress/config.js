module.exports = {
  base: '/wire-cell-tutorial/',
  markdown: {
    lineNumbers: true,
    // config: md => {
    //   // use more markdown-it plugins!
    //   md.use(require('markdown-it-math'))
    // }
  },
  themeConfig: {
    repo: 'czczc/wire-cell-tutorial',
    repoLabel: 'Contribute!',
    editLinks: true,
    nav: [
        { text: 'Home',link: '/' },
        { text: 'Get started', link: '/intro/' }
    ],
    sidebar: [
      ['/intro', 'Preface'],
      '/install'
    ],
    sidebarDepth: 2,
    lastUpdated: 'Last Updated'
  },
  title: "Wire-Cell Tutorial",
  description: "Welcome to Wire-Cell"
}