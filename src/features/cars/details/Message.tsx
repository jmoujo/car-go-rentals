import {
  Avatar,
  Box,
  Button,
  Flex,
  Text,
  useMantineColorScheme,
  useMantineTheme,
} from '@mantine/core';

export const textColor = { light: 'gray.8', dark: 'gray.5', auto: 'gray.8' };

interface Props {
  isOwnMessage?: boolean;
  message: string;
  timeStamp?: string | null;
}
export const MessageCard = ({
  isOwnMessage = false,
  message,
  timeStamp,
}: Props) => {
  const { colorScheme } = useMantineColorScheme();
  const theme = useMantineTheme();

  return (
    <Flex gap={8} direction={isOwnMessage ? 'row-reverse' : 'row'} my="sm">
      <Box>
        <Text
          ta={isOwnMessage ? 'right' : 'left'}
          size="xs"
          c={textColor[colorScheme]}
          mx="xs"
          my={4}
        >
          {timeStamp}
        </Text>
        <Box
          style={{
            borderRadius: '5px',
            backgroundColor: isOwnMessage
              ? colorScheme === 'dark'
                ? theme.colors.gray[8]
                : theme.colors.gray[4]
              : colorScheme === 'dark'
              ? theme.colors.gray[7]
              : theme.colors.gray[3],
          }}
          py={6}
          pl={18}
          pr={36}
          miw="200px"
        >
          <Flex align="center" gap={4}>
            <Avatar
              miw={24}
              maw={24}
              h={24}
              size="14px"
              src=""
              alt="user-photo"
              radius="xl"
              c="blue"
            />
            <Text size="xs"> Kojo Marfo</Text>
          </Flex>

          <Box>
            <Text
              ta={isOwnMessage ? 'right' : 'left'}
              c={textColor[colorScheme]}
            >
              {message}
            </Text>
          </Box>
        </Box>
        <Flex
          align="center"
          direction={isOwnMessage ? 'row-reverse' : 'row'}
          py={4}
          gap={4}
        >
          <Button variant="subtle" size="xs">
            Like
          </Button>
          <Button variant="subtle" size="xs">
            Reply
          </Button>
        </Flex>
      </Box>
    </Flex>
  );
};
