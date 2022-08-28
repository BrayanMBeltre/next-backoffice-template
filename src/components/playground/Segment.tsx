import { Accordion } from '@mantine/core';
import { ReactElement } from 'react';

export const Segment = ({
  name,
  children,
}: {
  name: string;
  children: ReactElement;
}) => (
  <Accordion.Item value={name}>
    <Accordion.Control>{name}</Accordion.Control>
    <Accordion.Panel>{children}</Accordion.Panel>
  </Accordion.Item>
);

export default Segment;
