module.exports = {
  browserSync: {
    hostname: "journal.researchspaces.ca",
    port: 8080,
    openAutomatically: true,
    reloadDelay: 50,
    injectChanges: true,
  },

  drush: {
    enabled: false,
    alias: {
      css_js: 'drush @SITE-ALIAS cc css-js',
      cr: 'drush @SITE-ALIAS cr'
    }
  },

  twig: {
    useCache: true
  }
};
