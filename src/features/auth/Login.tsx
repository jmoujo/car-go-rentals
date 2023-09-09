'use client';

import { useAuthContext } from '@/context/AuthContext';
import {
  Anchor,
  Box,
  Button,
  Divider,
  Group,
  LoadingOverlay,
  Paper,
  PaperProps,
  PasswordInput,
  Stack,
  Text,
  TextInput,
} from '@mantine/core';
import Link from 'next/link';
import { useState } from 'react';
import { toast } from 'react-toastify';
import { NotRegisteredAlert } from './NotRegisteredAlert';
import { useLoginForm } from '../../hooks/useLoginForm';
import { useRouter } from 'next/navigation';
import { OAuthButtons } from './OAuthButtons';

const errorMessage = 'Invalid login credentials';

export function Login(props: PaperProps) {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [notRegistered, setNotRegistered] = useState(false);
  const form = useLoginForm();
  const { logInWithEmailPassword } = useAuthContext();

  const handleLogin = async () => {
    const { email, password } = form.values;
    setIsSubmitting(true);
    const { error } = await logInWithEmailPassword(email, password);
    setIsSubmitting(false);

    if (error?.message === errorMessage) {
      setNotRegistered(true);
    } else {
      toast.success('Login Successful', {
        position: toast.POSITION.TOP_CENTER,
      });
      form.reset();
      setNotRegistered(false);
      router.back();
    }
  };

  return (
    <Box px="md" py="xl">
      <Paper
        maw="450px"
        radius="sm"
        w="100%"
        p="xl"
        my="xl"
        mx="auto"
        withBorder
        {...props}
      >
        <LoadingOverlay visible={isSubmitting} overlayBlur={2} />
        <Text size="lg" weight={500}>
          Welcome back,
        </Text>
        <OAuthButtons />
        <Divider
          label="Or continue with email"
          labelPosition="center"
          my="lg"
        />

        <form onSubmit={form.onSubmit(() => handleLogin())}>
          <Stack>
            <TextInput
              required
              label="Email"
              placeholder="hello@cargo.com"
              value={form.values.email}
              onChange={(event) =>
                form.setFieldValue('email', event.currentTarget.value)
              }
              error={form.errors.email && 'Invalid email'}
              radius="md"
            />

            <PasswordInput
              required
              label="Password"
              placeholder="Your password"
              value={form.values.password}
              onChange={(event) =>
                form.setFieldValue('password', event.currentTarget.value)
              }
              error={
                form.errors.password &&
                'Password should include at least 6 characters'
              }
              radius="md"
            />
          </Stack>

          {notRegistered && <NotRegisteredAlert />}

          <Group position="apart" mt="xl">
            <Anchor
              component={Link}
              href="/signup"
              type="button"
              color="dimmed"
              size="xs"
            >
              Don{`'`}t have an account? Register
            </Anchor>
            <Button type="submit" radius="xl">
              Login
            </Button>
          </Group>
        </form>
      </Paper>
    </Box>
  );
}
