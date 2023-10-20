import { dividerColor } from '@/const';
import {
  Box,
  Burger,
  Divider,
  Drawer,
  useMantineColorScheme,
} from '@mantine/core';
import { useDisclosure, useMediaQuery } from '@mantine/hooks';
import { AuthButtons } from './AuthButtons';
import { Logo } from './Logo';
import { ThemeSwitcher } from './ThemeSwitcher';

export const NavigationMobile = () => {
  const smallScreen = useMediaQuery(`(max-width: 575px)`);
  const [opened, { close, toggle }] = useDisclosure(false);
  const { colorScheme } = useMantineColorScheme();

  return (
    <>
      <Drawer
        opened={opened}
        onClose={close}
        title={<Logo />}
        size="xs"
        pos="relative"
        hiddenFrom="md"
        // without this prop, opening the drawer in prod will throw a client side exception
        transitionProps={{
          transition: 'slide-right',
        }}
      >
        <Divider my="sm" color={dividerColor[colorScheme]} />
        <AuthButtons />
        <Box
          display={smallScreen ? 'block' : 'none'}
          pos="fixed"
          bottom="0"
          w="90%"
          py={8}
        >
          <ThemeSwitcher />
        </Box>
      </Drawer>
      <Burger opened={opened} onClick={toggle} hiddenFrom="md" />
    </>
  );
};
