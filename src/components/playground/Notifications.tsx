import { Button, Group } from '@mantine/core';
import { showNotification } from '@mantine/notifications';
import { IconX } from '@tabler/icons';

export const Notifications = () => {
  return (
    <>
      <Group position='center'>
        <Button
          variant='outline'
          onClick={() =>
            showNotification({
              title: 'Default notification',
              message: 'Hey there, your code is awesome! 🤥',
            })
          }
        >
          Show notification
        </Button>
        <Button
          variant='outline'
          onClick={() =>
            showNotification({
              id: 'hello-there',
              disallowClose: true,
              onClose: () => console.log('unmounted'),
              onOpen: () => console.log('mounted'),
              autoClose: 3000,
              title: "You've been compromised",
              message: 'Leave the building immediately',
              color: 'red',
              icon: <IconX />,
              className: 'my-notification-class',
              style: { backgroundColor: 'red' },
              sx: { backgroundColor: 'red' },
              loading: false,
            })
          }
        >
          notification props
        </Button>
        <Button
          variant='outline'
          onClick={() =>
            showNotification({
              title: 'Default notification',
              message: 'Hey there, your code is awesome! 🤥',
              styles: (theme) => ({
                root: {
                  backgroundColor: theme.colors.blue[6],
                  borderColor: theme.colors.blue[6],

                  '&::before': { backgroundColor: theme.white },
                },

                title: { color: theme.white },
                description: { color: theme.white },
                closeButton: {
                  color: theme.white,
                  '&:hover': { backgroundColor: theme.colors.blue[7] },
                },
              }),
            })
          }
        >
          Show customized notification
        </Button>
      </Group>
    </>
  );
};
