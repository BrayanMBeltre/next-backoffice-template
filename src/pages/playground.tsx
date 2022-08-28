import { Accordion, Button, Group } from '@mantine/core';
import { openSpotlight } from '@mantine/spotlight';
import type { ReactElement } from 'react';

import Layout from '@/components/common/Layouts/Layout';
import { Buttons } from '@/components/playground/Buttons';
import { Dropzone } from '@/components/playground/Dropzone';
import Forms from '@/components/playground/Forms';
import { ImageComparation } from '@/components/playground/ImageComparation';
import { Modals } from '@/components/playground/Modals';
import { NavigationProgress } from '@/components/playground/NavigationProgress';
import { Notifications } from '@/components/playground/Notifications';
import Segment from '@/components/playground/Segment';
import Table from '@/components/playground/Table';

import { users } from '../data/mocks/users';

const PlaygroundPage = () => {
  return (
    <Accordion variant='separated' multiple>
      <Segment name='notifications'>
        <Notifications />
      </Segment>

      <Segment name='Navigation Progress'>
        <NavigationProgress />
      </Segment>

      <Segment name='Modals'>
        <Modals />
      </Segment>

      <Segment name='dropzone'>
        <Dropzone />
      </Segment>

      <Segment name='Spotlight'>
        <Group position='center'>
          <Button onClick={openSpotlight}>Open spotlight</Button>
        </Group>
      </Segment>

      <Segment name='Buttons'>
        <Buttons />
      </Segment>

      <Segment name='Table'>
        <Table data={users} />
      </Segment>

      <Segment name='Forms'>
        <Forms />
      </Segment>

      <Segment name='image'>
        <ImageComparation />
      </Segment>
    </Accordion>
  );
};

PlaygroundPage.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default PlaygroundPage;
