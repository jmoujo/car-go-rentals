'use client';
import { SelectCountry } from '@/components/SelectCountry';
import { SelectRegion } from '@/components/SelectRegion';
import {
  Avatar,
  Box,
  Button,
  FileButton,
  Flex,
  Input,
  SegmentedControl,
  Title,
} from '@mantine/core';
import { DateInput } from '@mantine/dates';
import { useState } from 'react';
import { FaUser } from 'react-icons/fa';

export const Profile = () => {
  const [file, setFile] = useState<File | null>(null);

  return (
    <>
      <Flex gap="4rem">
        <Flex
          direction="column"
          gap="sm"
          justify="flex-start"
          align="center"
          mt="4rem"
        >
          <Avatar size="150px" sx={{ borderRadius: '80px' }}>
            <FaUser />
          </Avatar>
          <FileButton onChange={setFile} accept="image/png,image/jpeg">
            {(props) => (
              <Button variant="outline" {...props}>
                Upload image
              </Button>
            )}
          </FileButton>
        </Flex>
        <Box sx={{ flexGrow: 1 }}>
          <Title color="gray.6" mb="4rem">
            Profile Details
          </Title>

          <Box>
            <Input.Label>Full Name</Input.Label>
            <Input type="text" placeholder="Eric Mensah" />
          </Box>

          <Box my="sm">
            <Input.Label>Email Address</Input.Label>
            <Input type="text" placeholder="eric.mensah@gmail.com" />
          </Box>

          <Box my="sm">
            <Input.Label>Phone Number</Input.Label>
            <Input type="text" placeholder="+233 557869685" />
          </Box>

          <Box my="sm">
            <Input.Label mr={16}>Gender</Input.Label>
            <SegmentedControl
              data={[
                { label: 'Male', value: 'male' },
                { label: 'Female', value: 'female' },
              ]}
            />
          </Box>

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
              maw={200}
            />
          </Box>

          <Box my="lg">
            <Title order={4}>Address</Title>

            <Box my="sm">
              <SelectCountry />
            </Box>

            <Box my="sm">
              <SelectRegion />
            </Box>

            <Box my="sm">
              <Input.Label>City</Input.Label>
              <Input type="text" placeholder="Achimota" />
            </Box>

            <Box my="sm">
              <Input.Label>Street</Input.Label>
              <Input type="text" placeholder="Kaiser Valley St." />
            </Box>

            <Box my="sm">
              <Input.Label>Zip Code</Input.Label>
              <Input type="text" placeholder="00233" />
            </Box>
          </Box>
        </Box>
      </Flex>
    </>
  );
};
