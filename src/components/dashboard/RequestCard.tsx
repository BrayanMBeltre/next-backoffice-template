import { Button, CloseButton, Group, Paper, Text } from '@mantine/core';

export const RequestCard = () => {
  return (
    <>
      <Paper withBorder radius='md' shadow='sm' p={4}>
        <Text color='dimmed' size='xs'>
          So the deal is, we want to spy on you. We would like to know what did
          you have for todays breakfast, where do you live, how much do you earn
          and like 50 other things. To view our landing page you will have to
          accept all cookies. That&apos;s all, and remember that we are
          watching...
        </Text>
      </Paper>
    </>
  );
};

export default RequestCard;
