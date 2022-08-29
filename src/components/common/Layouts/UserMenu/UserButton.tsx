import { Avatar, Group, Text } from '@mantine/core';
import { IconChevronRight } from '@tabler/icons';

interface UserButtonProps {
  image: string;
  name: string;
  email: string;
  icon?: React.ReactNode;
}

export const UserButton = ({ image, name, email, icon }: UserButtonProps) => {
  return (
    <Group>
      <Avatar src={image} radius='xl' />

      <div style={{ flex: 1 }}>
        <Text size='sm' weight={500}>
          {name}
        </Text>

        <Text color='dimmed' size='xs'>
          {email}
        </Text>
      </div>

      {icon || <IconChevronRight size={14} stroke={1.5} />}
    </Group>
  );
};

export default UserButton;
