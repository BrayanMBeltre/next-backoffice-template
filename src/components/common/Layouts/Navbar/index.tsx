import {
  createStyles,
  Navbar as MantineNavbar,
  ScrollArea,
} from '@mantine/core';

import { navbarLinks } from '@/data/mocks/navbarLinks';

import { LinksGroup } from './NavbarLinksGroup';
import UserMenu from '../UserMenu';

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

  const links = navbarLinks.map((item) => (
    <LinksGroup key={item.label} {...item} />
  ));

  return (
    <MantineNavbar
      hiddenBreakpoint='sm'
      width={{ sm: 300 }}
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
      <div className='sm:hidden'>
        <UserMenu />
      </div>
    </MantineNavbar>
  );
};
export default Navbar;
