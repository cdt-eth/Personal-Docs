import React from 'react';
import { DocsThemeConfig } from 'nextra-theme-docs';

const config: DocsThemeConfig = {
  logo: <span>cdts docs</span>,
  project: {
    link: 'https://github.com/cdt-eth',
  },
  faviconGlyph: '🆒',
  docsRepositoryBase: 'https://github.com/cdt-eth',
  footer: {
    text: 'made by cdt.',
  },
};

export default config;
