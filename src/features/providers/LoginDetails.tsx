import { EmailConfirmation } from '@/components/EmailConfirmation';
import { primaryGradient } from '@/const';
import { useAuthContext } from '@/context/AuthContext';
import { IReqProviderProps } from '@/models/req.model';
import {
  Box,
  Button,
  Flex,
  Group,
  Input,
  LoadingOverlay,
  Notification,
  PasswordInput,
  Space,
  Text,
  Title,
} from '@mantine/core';
import { redirect, useRouter } from 'next/navigation';
import { Dispatch, SetStateAction, useState } from 'react';
import { BsArrowLeft } from 'react-icons/bs';

interface Props {
  prev?: () => void;
  companyDetails: Partial<IReqProviderProps>;
  setCompanyDetails: Dispatch<SetStateAction<Partial<IReqProviderProps>>>;
}

export const LoginDetails = ({
  prev,
  companyDetails,
  setCompanyDetails,
}: Props) => {
  const { signupWithEmailPassword } = useAuthContext();
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isCreate, setIsCreate] = useState(false);
  const [passwordError, setPasswordError] = useState<string | undefined>(
    undefined
  );
  const { push } = useRouter();

  const updateDetails = (key: keyof IReqProviderProps, value: any) => {
    setCompanyDetails((prevState) => ({
      ...prevState,
      [key]: value,
    }));
  };

  const handleCreateProviderAccount = async () => {
    setIsCreate(true);

    if (!password) {
      setPasswordError('Password is required');
    }

    if (password !== confirmPassword) {
      setPasswordError('Passwords do not match');
    }
    if (
      companyDetails.email &&
      /^\S+@\S+$/.test(companyDetails.email) &&
      password &&
      password === confirmPassword
    ) {
      // sign provider up
      setIsSubmitting(true);
      const { data } = await signupWithEmailPassword(
        companyDetails.email,
        password,
        {
          role: 'provider',
          profileUrl: companyDetails.profileUrl,
          companyName: companyDetails.companyName,
          businessRegistrationNumber: companyDetails.businessRegistrationNumber,
          contactName: companyDetails.contactName,
          phone: companyDetails.phone,
          country_id: companyDetails.country_id,
          region_id: companyDetails.region_id,
          city: companyDetails.city,
          street: companyDetails.street,
        }
      );
      setIsSubmitting(false);
      setIsSubmitted(true);
      push('/login');
    }
  };

  return (
    <>
      {isSubmitted ? (
        <EmailConfirmation email={companyDetails.email || ''} />
      ) : (
        <Flex gap="4rem">
          <LoadingOverlay visible={isSubmitting} overlayBlur={2} />
          <Box sx={{ flexGrow: 1 }}>
            <Title color="gray.6" mt="2rem">
              Login Details
            </Title>
            <Space mt="2rem" />

            <Group grow>
              <Box>
                <Input.Label>Email Address</Input.Label>
                <Input
                  type="email"
                  placeholder="cargo@gmail.com"
                  value={companyDetails.email}
                  onChange={(event) =>
                    updateDetails('email', event.currentTarget.value)
                  }
                />
                {isCreate && !companyDetails.email && (
                  <Input.Error>Email address is required</Input.Error>
                )}
              </Box>
            </Group>

            <Space mt="1rem" />
            <Group grow>
              <Box>
                <Input.Label>Password</Input.Label>
                <PasswordInput
                  value={password}
                  onChange={(e) => setPassword(e.currentTarget.value)}
                  placeholder="xxxxxxxxxx"
                />
              </Box>
              <Box>
                <Input.Label>Confirm Password</Input.Label>
                <PasswordInput
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.currentTarget.value)}
                  placeholder="xxxxxxxxxx"
                />
              </Box>
            </Group>
            {passwordError && (
              <Notification
                color="red"
                mt="sm"
                onClose={() => setPasswordError(undefined)}
              >
                {passwordError}
              </Notification>
            )}
            <Space mt="2rem" />
            <Flex justify="space-between">
              <Button
                variant="subtle"
                onClick={prev}
                radius="xl"
                size="md"
                my="sm"
              >
                <BsArrowLeft />
                <Text ml="xs">Prev</Text>
              </Button>

              <Button
                variant="gradient"
                gradient={primaryGradient}
                onClick={handleCreateProviderAccount}
                radius="xl"
                size="md"
                my="sm"
              >
                <Text ml="xs">Create Account</Text>
              </Button>
            </Flex>
          </Box>
        </Flex>
      )}
    </>
  );
};
