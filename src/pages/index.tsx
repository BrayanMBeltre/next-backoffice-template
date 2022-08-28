import type { ReactElement } from 'react';

import { stats } from '@/data/mocks/stats';

import Layout from '@/components/common/Layouts/Layout';
import StatsCards from '@/components/dashboard/StatsCards';

const IndexPage = () => {
  return (
    <>
      <StatsCards data={stats} />
      <div>Hello index</div>
    </>
  );
};

IndexPage.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default IndexPage;
