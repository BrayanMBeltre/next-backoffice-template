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
  return (
    <>
      {/* BreadCrumbs */}
      <Group position='apart'>
        <div />
        <Breadcrumbs>{items}</Breadcrumbs>
      </Group>
    </>
  );
};

IndexPage.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default IndexPage;
