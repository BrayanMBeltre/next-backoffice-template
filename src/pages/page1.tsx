import { ReactElement, useState } from 'react';

import Layout from '@/components/common/Layouts/Layout';

const IndexPage = () => {
  const [counter, setCounter] = useState(0);

  return (
    <>
      <p>Page 1</p>
      <p>{counter}</p>
      <button onClick={() => setCounter((c) => c + 1)}>+</button>
      <button onClick={() => setCounter((c) => c - 1)}>-</button>
    </>
  );
};

IndexPage.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default IndexPage;
