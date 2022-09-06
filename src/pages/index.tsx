import { Paper, ScrollArea, SimpleGrid, Text } from '@mantine/core';
import type { ReactElement } from 'react';

import { stats } from '@/data/mocks/stats';

import Layout from '@/components/common/Layouts/Layout';
import RequestCard from '@/components/dashboard/RequestCard';
import StatsCards from '@/components/dashboard/StatsCards';

const IndexPage = () => {
  return (
    <>
      <div className='grid gap-4 lg:grid-cols-2'>
        <div className=''>
          <Paper withBorder radius='md' shadow='md'>
            <Paper className='bg-blue-900' radius='xs' p={6}>
              <Text size='md' weight={600} color='white'>
                Welcome User
              </Text>
            </Paper>

            <Paper className='bg-gray-900' radius='xs' p={6}>
              <Text size='md' weight={600} color='white'>
                Last 10 requests
              </Text>
            </Paper>

            <ScrollArea style={{ height: 265 }}>
              <div className='grid gap-2 px-2 mt-2'>
                <RequestCard />
                <RequestCard />
                <RequestCard />
                <RequestCard />
                <RequestCard />
                <RequestCard />
              </div>
            </ScrollArea>
          </Paper>
        </div>
        <div className=''>
          <StatsCards data={stats} />
        </div>
      </div>

      <div>hello index</div>
    </>
  );
};

IndexPage.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default IndexPage;
