import {
  SpotlightAction,
  SpotlightProvider as MantineSpotlightProvider,
} from '@mantine/spotlight';
import {
  IconDashboard,
  IconFileText,
  IconHome,
  IconSearch,
} from '@tabler/icons';
import { ReactNode } from 'react';

const actions: SpotlightAction[] = [
  {
    title: 'Home',
    description: 'Get to home page',
    onTrigger: () => console.log('Home'),
    icon: <IconHome size={18} />,
  },
  {
    title: 'Dashboard',
    description: 'Get full information about current system status',
    onTrigger: () => console.log('Dashboard'),
    icon: <IconDashboard size={18} />,
  },
  {
    title: 'Documentation',
    description: 'Visit documentation to lean more about all features',
    onTrigger: () => console.log('Documentation'),
    icon: <IconFileText size={18} />,
  },
];

type SpotlightProviderProps = {
  children: ReactNode;
};

export const SpotlightProvider = ({ children }: SpotlightProviderProps) => {
  return (
    <MantineSpotlightProvider
      actions={actions}
      searchIcon={<IconSearch size={18} />}
      searchPlaceholder='Search...'
      shortcut={['mod + P', 'mod + K', '/']}
      nothingFoundMessage='Nothing found...'
    >
      {children}
    </MantineSpotlightProvider>
  );
};

export default SpotlightProvider;
