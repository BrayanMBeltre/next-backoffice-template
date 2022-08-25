import { Button, Group } from '@mantine/core';
import React from 'react';

export const Buttons = () => {
  return (
    <>
      <div>Buttons variants</div>
      <Group position='center'>
        <Button>Primary</Button>
        <Button variant='default'>Default</Button>
        <Button variant='filled'>filled</Button>
        <Button variant='light'>light</Button>
        <Button variant='outline'>outline</Button>
        <Button variant='white'>white</Button>
        <Button variant='subtle'>subtle</Button>
      </Group>
    </>
  );
};
