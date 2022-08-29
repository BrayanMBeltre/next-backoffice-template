import {
  Burger,
  createStyles,
  Group,
  Header as MantineHeader,
  MantineTheme,
  MediaQuery,
} from '@mantine/core';

import UserMenu from '../UserMenu';
import UserButton from '../UserMenu/UserButton';
import Logo from '../../Logo';

const useStyles = createStyles((theme) => ({
  header: {
    backgroundColor:
      theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.white,
  },
}));

type HeaderProps = {
  opened: boolean;
  setOpened: () => void;
  theme: MantineTheme;
};

export const Header = ({ opened, setOpened }: HeaderProps) => {
  const { theme } = useStyles();

  return (
    <MantineHeader height={70} p='md'>
      <div style={{ display: 'flex', alignItems: 'center', height: '100%' }}>
        <MediaQuery largerThan='sm' styles={{ display: 'none' }}>
          <Burger
            opened={opened}
            onClick={setOpened}
            size='sm'
            color={theme.colors.gray[6]}
            mr='xl'
          />
        </MediaQuery>

        <Logo className='w-[300px] py-4' />

        <Group position='apart' className='w-full'>
          <div />
          <div className='hidden sm:block'>
            <UserMenu />
          </div>
        </Group>
      </div>
    </MantineHeader>
  );
};

export default Header;
