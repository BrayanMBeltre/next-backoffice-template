import type { ReactElement } from 'react';

import Layout from '@/components/common/Layouts/Layout';

const IndexPage = () => {
  return <p>hello world</p>;
};

IndexPage.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default IndexPage;
