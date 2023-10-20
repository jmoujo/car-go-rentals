import { textColor, textMutedColor } from '@/const';
import {
  Avatar,
  Box,
  Flex,
  Text,
  Title,
  useMantineColorScheme,
} from '@mantine/core';

interface Props {
  provider: {
    companyName: string;
    avatar: string;
    email: string;
    phone: string;
  };
}
export const ProviderDetails = ({ provider }: Props) => {
  const { colorScheme } = useMantineColorScheme();
  return (
    <Flex
      justify="space-between"
      align={{ base: 'flex-start', md: 'center' }}
      direction={{ base: 'column', md: 'row' }}
      my={16}
    >
      <Box>
        <Flex align="center" gap={8}>
          <Avatar
            src={provider.avatar}
            style={{ border: '1px solid gray' }}
            radius="xl"
            c="pink"
          />
          <Title order={3} c={textColor[colorScheme]}>
            {provider.companyName}
          </Title>
        </Flex>
        <Flex ml={46} style={{ fontSize: 'small' }}>
          <Text
            component="a"
            href={`tel:${provider.phone}`}
            c={textMutedColor[colorScheme]}
          >
            {provider.phone}
          </Text>
          <Text mx="xs" c={textMutedColor[colorScheme]}>
            |
          </Text>
          <Text
            component="a"
            href={`mailto:${provider.email}`}
            c={textMutedColor[colorScheme]}
          >
            {provider.email}
          </Text>
        </Flex>
      </Box>
    </Flex>
  );
};
