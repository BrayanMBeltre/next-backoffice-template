import {
  createStyles,
  Navbar as MantineNavbar,
  ScrollArea,
} from '@mantine/core';
import {
  IconAdjustments,
  IconCalendarStats,
  IconFileAnalytics,
  IconGauge,
  IconLock,
  IconNotes,
  IconPresentationAnalytics,
} from '@tabler/icons';

import { LinksGroup, LinksGroupProps } from './NavbarLinksGroup';

const mockdata: Array<LinksGroupProps> = [
  { label: 'Dashboard', href: '/', icon: IconGauge },
  {
    label: 'Market news',
    icon: IconNotes,
    initiallyOpened: true,
    links: [
      { label: 'Overview', href: '/page1' },
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
];

const useStyles = createStyles((theme) => ({
  navbar: {
    backgroundColor:
      theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.white,
    paddingBottom: 0,
  },

  links: {
    marginLeft: -theme.spacing.md,
    marginRight: -theme.spacing.md,
  },

  linksInner: {
    paddingBottom: theme.spacing.xl,
  },
}));

type NavbarProps = {
  opened: boolean;
};

const Navbar = ({ opened }: NavbarProps) => {
  const { classes } = useStyles();

  const links = mockdata.map((item) => (
    <LinksGroup key={item.label} {...item} />
  ));

  return (
    <MantineNavbar
      hiddenBreakpoint='sm'
      width={{ sm: 300, lg: 400 }}
      p='md'
      hidden={!opened}
      className={classes.navbar}
    >
      <MantineNavbar.Section
        grow
        className={classes.links}
        component={ScrollArea}
      >
        <div className={classes.linksInner}>{links}</div>
      </MantineNavbar.Section>
    </MantineNavbar>
  );
};
export default Navbar;
