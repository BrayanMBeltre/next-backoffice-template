import { AppShell, useMantineTheme } from '@mantine/core';
import React, { ReactElement, useState } from 'react';

import Header from './Header';
import Navbar from './Navbar';

type DashboardLayoutProps = {
  children: ReactElement;
};

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  const theme = useMantineTheme();
  const [opened, setOpened] = useState(false);

  return (
    <AppShell
      styles={{
        main: {
          background:
            theme.colorScheme === 'dark'
              ? theme.colors.dark[8]
              : theme.colors.gray[0],
        },
      }}
      navbarOffsetBreakpoint='sm'
      asideOffsetBreakpoint='sm'
      header={
        <Header
          opened={opened}
          setOpened={() => setOpened((o) => !o)}
          theme={theme}
        />
      }
      navbar={<Navbar opened={opened} />}
    >
      {children}
    </AppShell>
  );
};

export default DashboardLayout;
