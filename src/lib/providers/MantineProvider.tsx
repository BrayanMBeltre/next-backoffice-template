import {
  ColorScheme,
  ColorSchemeProvider,
  MantineProvider as MP,
} from '@mantine/core';
import { ModalsProvider } from '@mantine/modals';
import { NotificationsProvider } from '@mantine/notifications';
import { setCookie } from 'cookies-next';
import { ReactNode, useState } from 'react';

type MantineProviderProps = {
  children: ReactNode;
  colorScheme: ColorScheme;
};

export const MantineProvider = ({
  children,
  colorScheme,
}: MantineProviderProps) => {
  const [cs, setCs] = useState(colorScheme);

  const toggleColorScheme = (value?: ColorScheme) => {
    const nextColorScheme = value || (cs === 'dark' ? 'light' : 'dark');

    setCs(nextColorScheme);

    // when color scheme is updated save it to cookie
    setCookie('mantine-color-scheme', nextColorScheme, {
      maxAge: 60 * 60 * 24 * 30,
      sameSite: true,
    });
  };

  return (
    <ColorSchemeProvider colorScheme={cs} toggleColorScheme={toggleColorScheme}>
      <MP theme={{ colorScheme: cs }} withGlobalStyles withNormalizeCSS>
        <ModalsProvider>
          <NotificationsProvider>{children}</NotificationsProvider>
        </ModalsProvider>
      </MP>
    </ColorSchemeProvider>
  );
};

export default MantineProvider;
