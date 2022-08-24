import { ReactElement } from 'react';

import DashboardLayout from './DashboardLayout';

type LayoutProps = {
  variant?: 'logoOnly' | 'auth' | 'dashboard';
  children: ReactElement;
};

const Layout = ({ variant = 'dashboard', children }: LayoutProps) => {
  if (variant === 'logoOnly') {
    return <div>{children}</div>;
  }

  if (variant === 'auth') {
    return <div>{children}</div>;
  }

  return <DashboardLayout>{children}</DashboardLayout>;
};

export default Layout;
