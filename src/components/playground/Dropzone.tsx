import { Group, Image, SimpleGrid, Text } from '@mantine/core';
import {
  Dropzone as MantineDropzone,
  IMAGE_MIME_TYPE,
} from '@mantine/dropzone';
import React, { useState } from 'react';

export const Dropzone = () => {
  const [files, setFiles] = useState<File[]>([]);

  const previews = files.map((file, index) => {
    const imageUrl = URL.createObjectURL(file);
    return (
      <Image
        key={index}
        src={imageUrl}
        alt={file.name}
        imageProps={{ onLoad: () => URL.revokeObjectURL(imageUrl) }}
      />
    );
  });

  return (
    <>
      <div>Dropzone</div>
      <Group position='center'>
        <MantineDropzone accept={IMAGE_MIME_TYPE} onDrop={setFiles}>
          <Text align='center'>Drop images here</Text>
        </MantineDropzone>

        <SimpleGrid
          cols={4}
          breakpoints={[{ maxWidth: 'sm', cols: 1 }]}
          mt={previews.length > 0 ? 'xl' : 0}
        >
          {previews}
        </SimpleGrid>
      </Group>
    </>
  );
};
