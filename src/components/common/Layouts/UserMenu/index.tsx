import {
  createStyles,
  Menu,
  UnstyledButton,
  useMantineColorScheme,
} from '@mantine/core';
import {
  IconHeart,
  IconLogout,
  IconSettings,
  IconSwitchHorizontal,
} from '@tabler/icons';
import { useState } from 'react';

import { UserButton } from './UserButton';

const useStyles = createStyles((theme) => ({
  user: {
    width: '100%',
    color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black,
    padding: `${theme.spacing.xs}px ${theme.spacing.sm}px`,
    borderRadius: theme.radius.sm,
    transition: 'background-color 100ms ease',

    '&:hover': {
      backgroundColor:
        theme.colorScheme === 'dark'
          ? theme.colors.dark[8]
          : theme.colors.gray[0],
    },
  },

  userActive: {
    backgroundColor:
      theme.colorScheme === 'dark'
        ? theme.colors.dark[8]
        : theme.colors.gray[0],
  },
}));

export const UserMenu = () => {
  const { classes, theme, cx } = useStyles();
  const [userMenuOpened, setUserMenuOpened] = useState(false);
  const { toggleColorScheme } = useMantineColorScheme();

  return (
    <Menu
      width={260}
      position='bottom-end'
      transition='pop-top-right'
      onClose={() => setUserMenuOpened(false)}
      onOpen={() => setUserMenuOpened(true)}
    >
      <Menu.Target>
        <UnstyledButton
          className={cx(classes.user, {
            [classes.userActive]: userMenuOpened,
          })}
        >
          <UserButton
            image='https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=255&q=80'
            name='Ann Nullpointer'
            email='anullpointer@yahoo.com'
          />
        </UnstyledButton>
      </Menu.Target>

      <Menu.Dropdown>
        <Menu.Item
          icon={
            <IconHeart size={14} color={theme.colors.red[6]} stroke={1.5} />
          }
        >
          Liked posts
        </Menu.Item>

        <Menu.Label>Settings</Menu.Label>

        <Menu.Item
          onClick={() => toggleColorScheme()}
          icon={<IconSwitchHorizontal size={14} stroke={1.5} />}
        >
          Toggle Theme
        </Menu.Item>

        <Menu.Item icon={<IconSettings size={14} stroke={1.5} />}>
          Account settings
        </Menu.Item>

        <Menu.Item icon={<IconLogout size={14} stroke={1.5} />}>
          Logout
        </Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );
};

export default UserMenu;
