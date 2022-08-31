import { Anchor, Breadcrumbs, Group, Text } from '@mantine/core';
import { ReactElement, useState } from 'react';

import Layout from '@/components/common/Layouts/Layout';

const items = [
  { title: 'Mantine', href: '#' },
  { title: 'Mantine hooks', href: '#' },
  { title: 'use-id', href: '#' },
].map((item, index) => (
  <Anchor href={item.href} key={index}>
    {item.title}
  </Anchor>
));

const IndexPage = () => {
  const [counter, setCounter] = useState(0);

  return (
    <>
      <Group position='apart'>
        <div />
        <Breadcrumbs>{items}</Breadcrumbs>
      </Group>
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
