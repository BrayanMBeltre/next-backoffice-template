import { Group, Image as MantineImage } from '@mantine/core';
import NextImage from 'next/image';
import React from 'react';

export const ImageComparation = () => {
  const urlImage = 'https://i.redd.it/88f0y7db50k91.png';

  return (
    <Group position='center'>
      {/* 6.94kb */}
      <NextImage src={urlImage} width={200} height={200} />

      {/* 3.18mb */}
      <MantineImage src={urlImage} width={200} height={200} withPlaceholder />
    </Group>
  );
};
