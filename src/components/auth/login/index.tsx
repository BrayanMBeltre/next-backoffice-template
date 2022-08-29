import {
  Anchor,
  BackgroundImage,
  Button,
  Checkbox,
  Group,
  Paper,
  PasswordInput,
  Text,
  TextInput,
  Title,
  useMantineColorScheme,
} from '@mantine/core';

import Logo from '@/components/common/Logo';

import authBackGroundImage from '@/assets/auth-background.svg';

export const AuthenticationTitle = () => {
  return (
    <BackgroundImage src={authBackGroundImage.src} radius='sm'>
      <div className='flex flex-col items-center justify-center h-screen '>
        <div className='w-full max-w-md'>
          <div className='flex justify-center mb-8'>
            <Logo />
          </div>
          <Paper withBorder shadow='md' p={30} mt={30} radius='md'>
            <TextInput label='Email' placeholder='you@mantine.dev' required />
            <PasswordInput
              label='Password'
              placeholder='Your password'
              required
              mt='md'
            />

            <Button fullWidth mt='xl'>
              Sign in
            </Button>

            <Group position='center' mt='md'>
              <Anchor<'a'>
                onClick={(event) => event.preventDefault()}
                href='#'
                size='sm'
              >
                Forgot password?
              </Anchor>
            </Group>
          </Paper>
        </div>
      </div>
    </BackgroundImage>
  );
};

export default AuthenticationTitle;
