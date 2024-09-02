import { h } from 'vue';
import type { Theme } from 'vitepress';
import DefaultTheme from 'vitepress/theme';
import './style.scss';
import HtmlExampleBlock from './components/HtmlExampleBlock.vue';

export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {});
  },
  enhanceApp ({ app, router, siteData }) {
    // Register global custom components
    app.component('HtmlExampleBlock', HtmlExampleBlock);
  },
} satisfies Theme;
