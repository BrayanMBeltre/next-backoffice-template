import type { ReactElement } from 'react';

import AuthenticationTitle from '@/components/auth/login';
import Layout from '@/components/common/Layouts/Layout';

const IndexPage = () => {
  return (
    <>
      <AuthenticationTitle />
    </>
  );
};

IndexPage.getLayout = function getLayout(page: ReactElement) {
  return <Layout variant='auth'>{page}</Layout>;
};

export default IndexPage;
