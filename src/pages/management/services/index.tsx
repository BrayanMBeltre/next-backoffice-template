import {
  Anchor,
  Breadcrumbs as MantineBreadcrumbs,
  Button,
  Group,
  Space,
  Text,
  Title,
} from '@mantine/core';
import { IconChevronRight, IconPlus } from '@tabler/icons';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { ReactElement, useState } from 'react';

import { stats } from '@/data/mocks/stats';
import { users } from '@/data/mocks/users';

import Layout from '@/components/common/Layouts/Layout';
import StatsCards from '@/components/dashboard/StatsCards';
import Table from '@/components/playground/Table';

type BreadCrumbsItem = {
  title: string;
  href: string;
};

type BreadCrumbsProps = {
  items: Array<BreadCrumbsItem>;
};

const BreadCrumbs = (props: BreadCrumbsProps) => {
  const { pathname } = useRouter();

  if (!props?.items) {
    return <div />;
  }

  const items = props.items.map((item) => (
    <Link href={item.href} key={item.href} passHref>
      <Anchor component='a' color={pathname === item.href && 'dimmed'}>
        {item.title}
      </Anchor>
    </Link>
  ));

  return <MantineBreadcrumbs>{items}</MantineBreadcrumbs>;
};

const ServicesListPage = () => {
  return (
    <>
      {/* Title */}
      <Group position='apart'>
        <Title order={1} weight='bold'>
          Service List
        </Title>
        <Button leftIcon={<IconPlus />} color='green'>
          New Service
        </Button>
      </Group>

      <Space h='xl' />

      {/* BreadCrumbs */}
      <BreadCrumbs
        items={[
          {
            title: 'Home',
            href: '/',
          },
          {
            title: 'Services',
            href: '/management/services',
          },
        ]}
      />

      <Space h='xl' />

      {/* Stats */}

      {/* Filters */}

      {/* Table */}
      <Table data={users} />
    </>
  );
};

ServicesListPage.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default ServicesListPage;
