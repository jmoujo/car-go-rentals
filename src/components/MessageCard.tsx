import { textColor } from '@/const';
import {
  Avatar,
  Box,
  Collapse,
  Flex,
  Text,
  useMantineColorScheme,
  useMantineTheme,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';

export const boxBgColor = { light: 'white', dark: 'dark.6', auto: 'white' };

export function MessageCard() {
  const [opened, { toggle }] = useDisclosure(false);
  const { colorScheme } = useMantineColorScheme();
  const theme = useMantineTheme();

  return (
    <Box mb={4}>
      <Flex
        align={{ base: 'flex-start', md: 'center' }}
        gap={8}
        direction={{ base: 'column', md: 'row' }}
        onClick={toggle}
        p={4}
        bg={boxBgColor[colorScheme]}
      >
        <Flex align="center" gap={8}>
          <Avatar color="blue" radius="xl">
            S
          </Avatar>
          <Text fw="bold" c={textColor[colorScheme]} lineClamp={1}>
            Shadrack Ankomahene
          </Text>
        </Flex>
        <Flex align="center" gap={8}>
          <Text c={textColor[colorScheme]} lineClamp={1}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam
            quo officiis ratione doloremque!
          </Text>
          <Text
            miw="110px"
            style={{ flexGrow: 1 }}
            fw="bold"
            fz="sm"
            color={textColor[colorScheme]}
            lineClamp={1}
          >
            11-02-23, 19:34
          </Text>
        </Flex>
      </Flex>

      <Collapse in={opened} p={16}>
        <Flex align="center" justify="flex-end" gap={8} mb="sm">
          <Text fz="sm" c={textColor[colorScheme]}>
            Shadrack Ankomahene
          </Text>

          <Text fz="xs" fw="bold" c={textColor[colorScheme]}>
            11-02-23, 19:34
          </Text>
        </Flex>

        <Text c={colorScheme === 'dark' ? 'dark.2' : 'dark.3'}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam
          quo officiis ratione doloremque! Non alias fuga expedita est
          architecto! Quas ratione mollitia repellendus optio, autem nemo
          delectus corporis sed sapiente.
        </Text>
      </Collapse>
    </Box>
  );
}
