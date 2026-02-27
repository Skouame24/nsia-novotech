export type NsiaNavItem = {
  id: string;
  index: string;
  label: string;
  href: string;
};

export const NSIA_PROJET_NAV: NsiaNavItem[] = [
  {
    id: 'accueil',
    index: '1',
    label: "Le projet en un coup d’œil",
    href: '#accueil',
  },
  {
    id: 'pourquoi',
    index: '2',
    label: 'Pourquoi ce projet ?',
    href: '#pourquoi-projet',
  },
  {
    id: 'nouvel-outil',
    index: '3',
    label: 'Le nouvel outil',
    href: '#nouvel-outil',
  },
  {
    id: 'feuille-route',
    index: '4',
    label: 'Feuille de route & avancement',
    href: '#feuille-route',
  },
  {
    id: 'mon-pays',
    index: '5',
    label: 'Mon pays / Ma filiale',
    href: '#mon-pays',
  },
  {
    id: 'se-former',
    index: '6',
    label: 'Se former',
    href: '#se-former',
  },
  {
    id: 'equipe-projet',
    index: '7',
    label: 'Équipe projet',
    href: '#equipe-projet',
  },
  {
    id: 'actualites',
    index: '8',
    label: 'Actualités & communication',
    href: '#actualites',
  },
  {
    id: 'support',
    index: '9',
    label: 'Aide & support',
    href: '#support',
  },
  {
    id: 'documents',
    index: '10',
    label: 'Documents & ressources',
    href: '#documents',
  },
];

