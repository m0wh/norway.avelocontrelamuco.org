// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'A Vélo contre la Muco',
  plugins: [
    {
      use: 'gridsome-plugin-typescript'
    },
    {
      use: 'gridsome-plugin-sass-resources-loader',
      options: { resources: '@/assets/scss/main.scss' }
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'content/stages/**/*.md',
        typeName: 'Stage',
        remark: {
          externalLinksRel: ['noopener'],
          slug: false,
          imageQuality: 85
        }
      }
    }
  ],
  templates: {
    Stage: '/etapes/:slug'
  }
}
