import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    { text: 'Inicio', href: '/' },
    { text: 'Servicios', href: '/#features' },
    { text: 'Proceso', href: '/#process' },
    { text: 'Precios', href: '/#pricing' },
    { text: 'Contacto', href: '/#contact' },
  ],
  actions: [],
};

export const footerData = {
  links: [
    {
      title: 'Enlaces rápidos',
      links: [
        { text: 'Servicios', href: '/#features' },
        { text: 'Proceso', href: '/#process' },
        { text: 'Precios', href: '/#pricing' },
        { text: 'Contacto', href: '/#contact' },
      ],
    },
    {
      title: 'Contacto',
      links: [
        { text: 'Email', href: 'mailto:lucas@lucasgaldino.com' },
        { text: 'Telegram', href: 'tel:+34123456789' },
        //{ text: 'WhatsApp', href: 'https://wa.me/34123456789' }, // later
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Términos', href: '/terms' },
    { text: 'Privacidad', href: '/privacy' },
  ],
  socialLinks: [
    // { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: '#' },
    // { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: '#' },
  ],
  footNote: `
    © ${new Date().getFullYear()} Lucas Galdino. Todos los derechos reservados.
  `,
};
