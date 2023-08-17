'use client';
import { SelectCountry } from '@/components/SelectCountry';
import { SelectRegion } from '@/components/SelectRegion';
import { useAuthContext } from '@/context/AuthContext';
import { useUserProfileContext } from '@/context/UserProfileContext';
import { IReqUserProps } from '@/models/req.model';
import {
  Box,
  Button,
  Flex,
  Group,
  Input,
  LoadingOverlay,
  SegmentedControl,
  Title,
} from '@mantine/core';
import { DateInput } from '@mantine/dates';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { ProfilePhoto } from './ProfilePhoto';
import {
  UserDetails,
  getProfileDetails,
  initialProfileValues,
} from './getProfileDetails';

export const Profile = () => {
  const [profileDetails, setProfileDetails] =
    useState<UserDetails>(initialProfileValues);
  const [isUpdating, setIsUpdating] = useState(false);
  const { user } = useAuthContext();
  const { updateProfileInfo } = useUserProfileContext();

  const handleUpdateProfile = async () => {
    const updatedDetails: any = {};

    for (const [key, value] of Object.entries(profileDetails)) {
      if (value && user?.user_metadata?.[key] !== value) {
        updatedDetails[key] = value;
      }
    }

    if (Object.keys(updatedDetails).length !== 0) {
      setIsUpdating(true);
      const { error } = await updateProfileInfo(updatedDetails);
      setIsUpdating(false);
      if (error) {
        toast.error(error.message);
      } else {
        toast.success('Profile Updated');
      }
    }
  };

  const setProfileValue = (key: keyof IReqUserProps, value: any) => {
    setProfileDetails((prevState) => ({
      ...prevState,
      [key]: value,
    }));
  };

  useEffect(() => {
    setProfileDetails((prevState) => ({
      ...prevState,
      ...getProfileDetails(user),
    }));
  }, [user]);

  return (
    <>
      <Flex gap="4rem">
        <ProfilePhoto />
        <Box sx={{ flexGrow: 1 }}>
          <Title color="gray.6" mb="4rem">
            Profile Details
          </Title>

          <Box my="sm">
            <Input.Label>Email Address</Input.Label>
            <Input
              type="text"
              defaultValue={user?.email}
              placeholder="eric.mensah@gmail.com"
              disabled
            />
          </Box>

          <Box my="sm">
            <Input.Label>Username</Input.Label>
            <Input
              type="text"
              defaultValue={user?.user_metadata.username}
              placeholder="username"
              disabled
            />
          </Box>

          <Group grow>
            <Box>
              <Input.Label>First Name</Input.Label>
              <Input
                type="text"
                placeholder="Eric"
                value={profileDetails.firstName}
                onChange={(event) =>
                  setProfileValue('firstName', event.currentTarget.value)
                }
              />
            </Box>

            <Box>
              <Input.Label>Last Name</Input.Label>
              <Input
                type="text"
                placeholder="Mensah"
                value={profileDetails.lastName}
                onChange={(event) =>
                  setProfileValue('lastName', event.currentTarget.value)
                }
              />
            </Box>
          </Group>

          <Group grow>
            <Box my="sm">
              <DateInput
                dateParser={(input) => {
                  if (input === 'WW2') {
                    return new Date(1939, 8, 1);
                  }
                  return new Date(input);
                }}
                valueFormat="DD/MM/YYYY"
                label="Date of Birth"
                placeholder="DD/MM/YYYY"
                value={
                  profileDetails.dateOfBirth
                    ? new Date(profileDetails.dateOfBirth)
                    : undefined
                }
                onChange={(date) =>
                  setProfileValue('dateOfBirth', date?.toString() || '')
                }
              />
            </Box>
            <Box my="sm">
              <Input.Label>Phone Number</Input.Label>
              <Input
                type="text"
                placeholder="+233 557869685"
                value={profileDetails.phone}
                onChange={(event) =>
                  setProfileValue('phone', event.currentTarget.value)
                }
              />
            </Box>
          </Group>

          <Box my="sm">
            <Input.Label mr={16}>Gender</Input.Label>
            <SegmentedControl
              data={[
                { label: 'Male', value: 'male' },
                { label: 'Female', value: 'female' },
              ]}
              value={profileDetails.gender}
              onChange={(value) => setProfileValue('gender', value)}
            />
          </Box>

          <Box my="lg">
            <Title order={4}>Address</Title>

            <Group grow>
              <Box my="sm">
                <SelectCountry />
              </Box>
              <Box my="sm">
                <SelectRegion />
              </Box>
            </Group>

            <Group grow>
              <Box my="sm">
                <Input.Label>City</Input.Label>
                <Input
                  type="text"
                  placeholder="Achimota"
                  value={profileDetails.city}
                  onChange={(event) =>
                    setProfileValue('city', event.currentTarget.value)
                  }
                />
              </Box>
              <Box my="sm">
                <Input.Label>Street</Input.Label>
                <Input
                  type="text"
                  placeholder="Kaiser Valley St."
                  value={profileDetails.street}
                  onChange={(event) =>
                    setProfileValue('street', event.currentTarget.value)
                  }
                />
              </Box>
              <Box my="sm">
                <Input.Label>Postal Code</Input.Label>
                <Input
                  type="text"
                  placeholder="00233"
                  value={profileDetails.postalCode}
                  onChange={(event) =>
                    setProfileValue('postalCode', event.currentTarget.value)
                  }
                />
              </Box>
            </Group>
          </Box>
          <LoadingOverlay visible={isUpdating} overlayBlur={2} />
          <Button
            onClick={handleUpdateProfile}
            radius="sm"
            disabled={isUpdating}
          >
            {isUpdating ? 'Updating...' : 'Update Profile'}
          </Button>
        </Box>
      </Flex>
    </>
  );
};
