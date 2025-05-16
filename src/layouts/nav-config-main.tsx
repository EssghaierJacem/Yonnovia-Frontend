import { paths } from 'src/routes/paths';

import { CONFIG } from 'src/global-config';

import { Iconify } from 'src/components/iconify';

import type { NavMainProps } from './main/nav/types';

// ----------------------------------------------------------------------

export const navData: NavMainProps['data'] = [
  {
    title: 'Accueil',
    path: '/',
    icon: <Iconify width={22} icon="solar:home-angle-bold-duotone" />,
  },
  {
    title: 'À propos',
    path: paths.about,
    icon: <Iconify width={22} icon="solar:user-id-bold" />,
  },
  {
    title: "Découvre Mind'z'Kid",
    path: '/decouvre',
    icon: <Iconify width={22} icon="solar:eye-bold" />,
  },
  {
    title: 'Parcours Kid-Preneur',
    path: '/parcours-kid-preneur',
    icon: <Iconify width={22} icon="solar:pen-bold" />,
    children: [
      {
        subheader: 'Parcours',
        items: [
          { title: 'Parcours Kid-Preneur',path: '/parcours-kid-preneur'},
          { title: "Kid'Market", path: '/kid-market' },
          { title: "Réseau Kid'In", path: '/reseau-kidin' },
          { title: "Kid'Pay", path: '/kid-pay' },
        ],
      },
    ],
  },
  {
    title: "Coach ADA'Z",
    path: '/coach-adaz',
    icon: <Iconify width={22} icon="solar:user-rounded-bold" />,
  },
  {
    title: 'Contact',
    path: paths.contact,
    icon: <Iconify width={22} icon="solar:chat-round-dots-bold" />,
  },
];
