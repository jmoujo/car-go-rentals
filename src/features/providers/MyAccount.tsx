'use client';
import { primaryGradient, textColor, textMutedColor } from '@/const';
import { useAuthContext } from '@/context/AuthContext';
import { IReqProviderProps } from '@/models/req.model';
import {
  getProviderAsync,
  updateProviderAsync,
} from '@/services/supabase.service';
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
  street: '',
  avatar: '',
};

export const MyAccount = () => {
  const { user, logOut } = useAuthContext();
  const [providerDetails, setProviderDetails] =
    useState<Partial<IReqProviderProps>>(initialState);
  const [isUpdating, setIsUpdating] = useState(false);
  const { colorScheme } = useMantineColorScheme();

  const handleUpdateProviderAccount = async () => {
    setIsUpdating(true);
    const { error } = await updateProviderAsync(
      providerDetails,
      user?.id || ''
    );

    if (!error) {
      toast.success('Account Updated');
      setIsUpdating(false);
    } else {
      console.log(error);
      setIsUpdating(false);
    }
  };

  const handleSignOut = async () => {
    await logOut();
  };

  useEffect(() => {
    const loadProviderDetails = async () => {
      if (user) {
        const { data, error } = await getProviderAsync(user.id);
        if (!error) {
          setProviderDetails((prevState) => ({
            ...prevState,
            email: user?.email,
            ...data,
          }));
        }
      }
    };

    loadProviderDetails();
  }, [user]);

  return (
    <>
      <Flex justify="flex-end" align="center">
        <ActionIcon onClick={handleSignOut} color="red">
          <BiLogOutCircle size="1.2rem" />
        </ActionIcon>
        <Text size="sm" color={textMutedColor[colorScheme]}>
          Log out
        </Text>
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
