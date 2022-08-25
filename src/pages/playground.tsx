import { Button, Group } from '@mantine/core';
import {
  decrementNavigationProgress,
  incrementNavigationProgress,
  resetNavigationProgress,
  setNavigationProgress,
  startNavigationProgress,
  stopNavigationProgress,
} from '@mantine/nprogress';
import type { ReactElement } from 'react';

import Layout from '@/components/common/Layouts/Layout';

const PlaygroundPage = () => {
  return (
    <>
      <div>PlayGround</div>
      <Group position='center'>
        <Button onClick={() => incrementNavigationProgress(10)}>Add 10%</Button>
        <Button color='red' onClick={() => decrementNavigationProgress(10)}>
          Decrease 10%
        </Button>
        <Button onClick={() => setNavigationProgress(50)}>Set 50%</Button>
        <Button onClick={() => startNavigationProgress()}>Start</Button>
        <Button onClick={() => stopNavigationProgress()}>Stop</Button>
        <Button onClick={() => resetNavigationProgress()}>Reset</Button>
      </Group>
    </>
  );
};

PlaygroundPage.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default PlaygroundPage;
