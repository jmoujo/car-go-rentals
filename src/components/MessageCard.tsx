import { textColor } from '@/const';
import { boxBgColor } from '@/features/cars/details/useStyles';
import {
  Button,
  Group,
  Text,
  Collapse,
  Box,
  Flex,
  Avatar,
  useMantineColorScheme,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';

export function MessageCard() {
  const [opened, { toggle }] = useDisclosure(false);
  const { colorScheme } = useMantineColorScheme();

  return (
    <Box mb={4}>
      <Flex
        align={{ base: 'flex-start', md: 'center' }}
        gap={8}
        direction={{ base: 'column', md: 'row' }}
        sx={(theme) => ({
          cursor: 'pointer',
          '&:hover': {
            backgroundColor:
              theme.colorScheme === 'dark'
                ? theme.colors.dark[5]
                : theme.colors.gray[1],
          },
        })}
        onClick={toggle}
        p={4}
        bg={boxBgColor[colorScheme]}
      >
        <Flex align="center" gap={8}>
          <Avatar color="blue" radius="xl">
            S
          </Avatar>
          <Text fw="bold" color={textColor[colorScheme]} lineClamp={1}>
            Shadrack Ankomahene
          </Text>
        </Flex>
        <Flex align="center" gap={8}>
          <Text color={textColor[colorScheme]} lineClamp={1}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam
            quo officiis ratione doloremque!
          </Text>
          <Text
            miw="110px"
            sx={{ flexGrow: 1 }}
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
          <Text fz="sm" color={textColor[colorScheme]}>
            Shadrack Ankomahene
          </Text>

          <Text fz="xs" fw="bold" color={textColor[colorScheme]}>
            11-02-23, 19:34
          </Text>
        </Flex>

        <Text color={colorScheme === 'dark' ? 'dark.2' : 'dark.3'}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam
          quo officiis ratione doloremque! Non alias fuga expedita est
          architecto! Quas ratione mollitia repellendus optio, autem nemo
          delectus corporis sed sapiente.
        </Text>
      </Collapse>
    </Box>
  );
}
