import {
  Box,
  Center,
  clsx,
  createStyles,
  Group,
  Paper,
  RingProgress,
  SimpleGrid,
  Text,
  useMantineTheme,
} from '@mantine/core';
import { IconArrowDownRight, IconArrowUpRight } from '@tabler/icons';

export type Stats = {
  label: string;
  stats: string;
  progress: number;
  color: string;
  icon: 'up' | 'down';
};

interface StatsRingProps {
  data: Array<Stats>;
}

const icons = {
  up: IconArrowUpRight,
  down: IconArrowDownRight,
};

const useStyles = createStyles((theme) => ({
  color: {
    backgroundColor:
      theme.colorScheme === 'dark'
        ? theme.colors.dark[3]
        : theme.colors.blue[1],
  },
}));

export const StatsCards = ({ data }: StatsRingProps) => {
  const { theme } = useStyles();
  const { colors } = useMantineTheme();

  const stats = data.map((stat) => {
    const Icon = icons[stat.icon];

    return (
      <Paper withBorder radius='md' key={stat.label}>
        <Group>
          <RingProgress
            size={80}
            roundCaps
            thickness={8}
            sections={[{ value: stat.progress, color: stat.color }]}
            label={
              <Center>
                <Icon size={22} stroke={1.5} />
              </Center>
            }
          />

          <Text weight={700} size='xl'>
            {stat.stats}
          </Text>
        </Group>

        <Paper
          p='sm'
          mt={40}

          // className={clsx(`bg-[${'red' === 'red' && colors.blue[1]}]`)}
        >
          <Text color='white' size='xs' transform='uppercase' weight={700}>
            {stat.label}
          </Text>
        </Paper>
      </Paper>
    );
  });
  return (
    <SimpleGrid cols={2} breakpoints={[{ maxWidth: 'sm', cols: 1 }]}>
      {stats}
    </SimpleGrid>
  );
};

export default StatsCards;
