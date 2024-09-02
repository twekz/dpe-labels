import { defineConfig } from 'vitepress';

export default defineConfig({
  title: 'DPE Labels',
  description: 'Petit plugin JS pour la génération et l\'affichage de diagnostics de performance énergétique (DPE) sur le web. Léger, responsive, flexible.',

  themeConfig: {
    nav: [
      { text: 'Documentation', link: '/presentation' },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/twekz/dpe-labels' },
    ],

    sidebar: [
      {
        text: 'Démarrage',
        items: [
          { text: 'Présentation', link: '/presentation' },
          { text: 'Installation', link: '/installation' },
          { text: 'Plugin WordPress', link: '/wordpress' },
        ],
      },
      {
        text: 'Usage',
        items: [
          { text: 'Affichage d\'un DPE', link: '/usage/affichage' },
          { text: 'Affichage à partir des valeurs', link: '/usage/dpe-valeurs' },
          { text: 'Affichage à partir des classes', link: '/usage/dpe-classes' },
          { text: 'Étiquettes individuelles', link: '/usage/dpe-cep-eges' },
          { text: 'DPE vierge', link: '/usage/dpe-vierge' },
          { text: 'Personnalisation', link: '/usage/personnalisation' },
        ],
      },
      {
        items: [
          { text: 'Changelog', link: 'https://github.com/twekz/dpe-labels/blob/main/CHANGELOG.md' },
          { text: 'Licence', link: 'https://github.com/twekz/dpe-labels/blob/main/LICENSE' },
        ],
      },
    ],

    footer: {
      message: 'Publié sous Licence Publique Générale (GNU GPL version 3)',
      copyright: 'Créé par <a href="https://samlem.com" target="_blank">Sam Lemaresquier</a>',
    },

    externalLinkIcon: true,

    lang: 'fr-FR',

    // Translations:

    returnToTopLabel: 'Retour en haut',
    outline: {
      label: 'Sur cette page',
    },
    docFooter: {
      prev: 'Page précédente',
      next: 'Page suivante',
    },
    darkModeSwitchLabel: 'Thème',
    lightModeSwitchTitle: 'Passer au thème clair',
    darkModeSwitchTitle: 'Passer au thème sombre',
    notFound: {
      title: 'Page introuvable',
      quote: '',
      linkLabel: 'aller à la page d\'accueil',
      linkText: 'Retour à l\'accueil',
      code: '404',
    },
  },
});
