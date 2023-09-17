'use client';
import { primaryGradient, textColor } from '@/const';
import { useAuthContext } from '@/context/AuthContext';
import { useUserProfileContext } from '@/context/UserProfileContext';
import { IReqProviderProps } from '@/models/req.model';
import {
  ActionIcon,
  Box,
  Button,
  Divider,
  Flex,
  Group,
  Input,
  PasswordInput,
  Text,
  Title,
  useMantineColorScheme,
} from '@mantine/core';
import { useEffect, useState } from 'react';
import { BiLogOutCircle } from 'react-icons/bi';
import { toast } from 'react-toastify';
import { CompanyDetails } from './CompanyDetails';

const initialState: Partial<IReqProviderProps> = {
  email: '',
  businessRegistrationNumber: '',
  city: '',
  companyName: '',
  contactName: '',
  phone: '',
  profileUrl: '',
  street: '',
};

export const MyAccount = () => {
  const { user, logOut } = useAuthContext();
  const { updateProfileInfo } = useUserProfileContext();
  const [providerDetails, setProviderDetails] =
    useState<Partial<IReqProviderProps>>(initialState);
  const [isUpdating, setIsUpdating] = useState(false);
  const { colorScheme } = useMantineColorScheme();

  const handleUpdateProviderAccount = async () => {
    const updatedDetails: any = {};

    for (const [key, value] of Object.entries(providerDetails)) {
      if (value && user?.user_metadata?.[key] !== value) {
        updatedDetails[key] = value;
      }
    }

    if (Object.keys(updatedDetails).length !== 0) {
      setIsUpdating(true);
      try {
        await updateProfileInfo(updatedDetails);
        toast.success('Account Updated');
        setIsUpdating(false);
      } catch (error: any) {
        toast.error(error.message);
        setIsUpdating(false);
      }
    }
  };

  const handleSignOut = async () => {
    await logOut();
  };

  useEffect(() => {
    setProviderDetails((prevState) => ({
      ...prevState,
      email: user?.email,
      ...user?.user_metadata,
    }));
  }, [user]);

  return (
    <>
      <Flex justify="flex-end" align="center">
        <ActionIcon onClick={handleSignOut} color="red">
          <BiLogOutCircle size="1.2rem" />
        </ActionIcon>
        <Text size="sm">Log out</Text>
      </Flex>

      <CompanyDetails
        mode="edit"
        companyDetails={providerDetails}
        setCompanyDetails={setProviderDetails}
      />

      <Flex justify="flex-end">
        <Button
          variant="gradient"
          gradient={primaryGradient}
          onClick={handleUpdateProviderAccount}
          radius="xl"
          size="md"
          my="sm"
          disabled={isUpdating}
        >
          {isUpdating ? 'Updating...' : 'Update Profile'}
        </Button>
      </Flex>

      <Divider
        label={
          <Title order={4} color={textColor[colorScheme]}>
            Login Details
          </Title>
        }
        labelPosition="center"
        my="lg"
      />

      <Group grow>
        <Box>
          <Input.Label>Email Address</Input.Label>
          <Input
            type="email"
            placeholder="cargo@gmail.com"
            defaultValue={providerDetails.email}
            disabled
          />
        </Box>
        <Box>
          <Input.Label>Current Password</Input.Label>
          <PasswordInput placeholder="xxxxxxxxxx" disabled />
        </Box>
      </Group>

      <Group grow>
        <Box>
          <Input.Label>New Password</Input.Label>
          <PasswordInput placeholder="xxxxxxxxxx" disabled />
        </Box>
        <Box>
          <Input.Label>Confirm New Password</Input.Label>
          <PasswordInput placeholder="xxxxxxxxxx" disabled />
        </Box>
      </Group>

      <Flex justify="flex-end">
        <Button
          variant="gradient"
          gradient={primaryGradient}
          disabled
          radius="xl"
          size="md"
          my="sm"
        >
          <Text ml="xs">Update Login</Text>
        </Button>
      </Flex>
    </>
  );
};
