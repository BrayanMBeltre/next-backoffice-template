import {
  Burger,
  Header as MantineHeader,
  MantineTheme,
  MediaQuery,
  Text,
} from '@mantine/core';

import { ColorSchemeToggle } from './ColorSchemeToggle';

type HeaderProps = {
  opened: boolean;
  setOpened: () => void;
  theme: MantineTheme;
};

export const Header = ({ opened, setOpened, theme }: HeaderProps) => {
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

        <Text>Application header</Text>
        <ColorSchemeToggle />
      </div>
    </MantineHeader>
  );
};

export default Header;
