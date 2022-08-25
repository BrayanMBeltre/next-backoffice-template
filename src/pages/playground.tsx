import { Button, Group } from '@mantine/core';
import { openSpotlight } from '@mantine/spotlight';
import type { ReactElement } from 'react';

import Layout from '@/components/common/Layouts/Layout';
import { Buttons } from '@/components/playground/Buttons';
import { Dropzone } from '@/components/playground/Dropzone';
import { Modals } from '@/components/playground/Modals';
import { NavigationProgress } from '@/components/playground/NavigationProgress';
import { Notifications } from '@/components/playground/Notifications';
import Table from '@/components/playground/Table';

import { users } from '../data/mocks/users';

const PlaygroundPage = () => {
  return (
    <>
      <Notifications />
      <NavigationProgress />
      <Modals />
      <Dropzone />

      <div>Spotlight</div>
      <Group position='center'>
        <Button onClick={openSpotlight}>Open spotlight</Button>
      </Group>

      <Buttons />

      <div>Table</div>
      <Table data={users} />
    </>
  );
};

PlaygroundPage.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default PlaygroundPage;
