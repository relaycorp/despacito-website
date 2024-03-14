import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import tailwind from '@astrojs/tailwind';
import rehypeAstroRelativeMarkdownLinks from 'astro-rehype-relative-markdown-links';

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: 'Despacito',
      description: 'Vendor-neutral, adaptive application firewall protocol',
      social: {
        github: 'https://github.com/relaycorp/despacito-website',
      },
      editLink: {
        baseUrl: 'https://github.com/relaycorp/despacito-website/tree/main',
      },
      sidebar: [
        {
          label: 'Protocol overview',
          link: '/',
        },
        {
          label: 'Draft specs',
          link: '/specs',
        },
        {
          label: 'Contribute',
          link: '/contribute',
        },
        {
          label: 'About',
          link: '/about',
        },
      ],
      head: [
        {
          tag: 'script',
          attrs: {
            src: 'https://cdn.usefathom.com/script.js',
            'data-site': 'AKSFXCVW',
            defer: true,
          },
        },
      ],
      customCss: ['./src/tailwind.css', './src/custom.css'],
      components: {
        Footer: './src/components/Footer.astro',
      },
    }),
    tailwind({
      applyBaseStyles: false,
    }),
  ],

  markdown: {
    rehypePlugins: [[rehypeAstroRelativeMarkdownLinks, { contentPath: 'src/content/docs' }]],
  },
});
