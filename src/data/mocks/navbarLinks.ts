import {
  IconAdjustments,
  IconCalendarStats,
  IconFileAnalytics,
  IconGauge,
  IconLock,
  IconNotes,
  IconPlayCard,
  IconPresentationAnalytics,
} from '@tabler/icons';

import { LinksGroupProps } from '@/components/common/Layouts/Navbar/NavbarLinksGroup';

export const navbarLinks: Array<LinksGroupProps> = [
  { label: 'Dashboard', href: '/', icon: IconGauge },
  {
    label: 'Market news',
    icon: IconNotes,
    initiallyOpened: true,
    links: [
      { label: 'Services', href: '/management/services' },
      { label: 'Forecasts', href: '/page2' },
      { label: 'Outlook', href: '/page3' },
      { label: 'Real time', href: '/page4' },
    ],
  },
  {
    label: 'Releases',
    icon: IconCalendarStats,
    links: [
      { label: 'Upcoming releases', href: '/page1' },
      { label: 'Previous releases', href: '/page2' },
      { label: 'Releases schedule', href: '/page3' },
    ],
  },
  { label: 'Analytics', href: '/page1', icon: IconPresentationAnalytics },
  { label: 'Contracts', href: '/page2', icon: IconFileAnalytics },
  { label: 'Settings', href: '/page3', icon: IconAdjustments },
  {
    label: 'Security',
    icon: IconLock,
    links: [
      { label: 'Enable 2FA', href: '/page1' },
      { label: 'Change password', href: '/page2' },
      { label: 'Recovery codes', href: '/page3' },
    ],
  },
  {
    label: 'Playground',
    href: '/playground',
    icon: IconPlayCard,
  },
];
