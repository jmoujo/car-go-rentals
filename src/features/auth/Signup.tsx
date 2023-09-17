'use client';
import { GoogleButton } from '@/components/GoogleButton';
import { Logo } from '@/components/Header/Logo';
import { TwitterButton } from '@/components/TwitterButton';
import { useAuthContext } from '@/context/AuthContext';
import {
  Alert,
  Anchor,
  Box,
  Button,
  Checkbox,
  Divider,
  Flex,
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
import { toast } from 'react-toastify';
import { useSignupForm } from './useSignupForm';
import { useState } from 'react';
import { IconAlertCircle } from '@tabler/icons-react';
import { OAuthButtons } from './OAuthButtons';
import { EmailConfirmation } from '@/components/EmailConfirmation';

export function Signup(props: PaperProps) {
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const form = useSignupForm();
  const { signupWithEmailPassword } = useAuthContext();

  const handleSignUp = async () => {
    const { email, password, username } = form.values;
    setIsSubmitting(true);
    const { error } = await signupWithEmailPassword(email, password, {
      username,
    });
    setIsSubmitting(false);
    if (error) {
      toast.error('Error Signing you up');
    } else {
      setIsSubmitted(true);
      toast.success('Signup Successful. Please check your email to verify', {
        position: toast.POSITION.TOP_CENTER,
      });
    }
  };

  return (
    <>
      {isSubmitted ? (
        <EmailConfirmation email={form.values.email} />
      ) : (
        <Box px="md" py="xl">
          <Paper
            maw="450px"
            radius="md"
            p="xl"
            mx="auto"
            my="xl"
            withBorder
            {...props}
          >
            <LoadingOverlay visible={isSubmitting} overlayBlur={2} />
            <Text size="lg" weight={500}>
              Welcome to <Logo />
            </Text>
            <OAuthButtons />
            <Divider
              label="Or continue with email"
              labelPosition="center"
              my="lg"
            />

            <form onSubmit={form.onSubmit(() => handleSignUp())}>
              <Stack>
                <TextInput
                  required
                  label="Username"
                  placeholder="Your username"
                  value={form.values.username}
                  onChange={(event) =>
                    form.setFieldValue('username', event.currentTarget.value)
                  }
                  error={form.errors.username && form.errors.username}
                  radius="md"
                />

                <TextInput
                  required
                  label="Email"
                  placeholder="hello@cargo.com"
                  value={form.values.email}
                  onChange={(event) =>
                    form.setFieldValue('email', event.currentTarget.value)
                  }
                  error={form.errors.email && form.errors.email}
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
                <PasswordInput
                  required
                  label="Confirm Password"
                  placeholder="Confirm Your password"
                  value={form.values.confirmPassword}
                  onChange={(event) =>
                    form.setFieldValue(
                      'confirmPassword',
                      event.currentTarget.value
                    )
                  }
                  error={
                    form.errors.confirmPassword && 'Passwords do not match'
                  }
                  radius="md"
                />

                <Checkbox
                  label="I accept terms and conditions"
                  checked={form.values.terms}
                  onChange={(event) =>
                    form.setFieldValue('terms', event.currentTarget.checked)
                  }
                  error={
                    form.errors.terms &&
                    'You need to accept terms and conditions'
                  }
                />
              </Stack>

              <Group position="apart" mt="xl">
                <Anchor
                  component={Link}
                  href="/login"
                  type="button"
                  color="dimmed"
                  size="xs"
                >
                  Already have an account? Login
                </Anchor>
                <Button type="submit" radius="xl">
                  Signup
                </Button>
              </Group>

              <Group mt="xl">
                <Anchor
                  component={Link}
                  href="/providers"
                  type="button"
                  color="dimmed"
                  size="xs"
                >
                  Want to Rent your Car? Create Provider Account.
                </Anchor>
              </Group>
            </form>
          </Paper>
        </Box>
      )}
    </>
  );
}
