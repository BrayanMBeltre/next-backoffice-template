import { ReactNode, useState } from 'react';
import {
  ColorSchemeProvider,
  ColorScheme,
  MantineProvider as MP,
} from '@mantine/core';
import { setCookie } from 'cookies-next';

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
    });
  };
  return (
    <ColorSchemeProvider colorScheme={cs} toggleColorScheme={toggleColorScheme}>
      <MP theme={{ colorScheme: cs }} withGlobalStyles withNormalizeCSS>
        {children}
      </MP>
    </ColorSchemeProvider>
  );
};

export default MantineProvider;
