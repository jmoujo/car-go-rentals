'use client';

import { Navbar } from '@/components/Header';
import { CacheProvider } from '@emotion/react';
import {
  Box,
  ColorScheme,
  ColorSchemeProvider,
  MantineProvider,
  useEmotionCache,
} from '@mantine/core';
import { useColorScheme, useHotkeys, useLocalStorage } from '@mantine/hooks';
import { useServerInsertedHTML } from 'next/navigation';

export default function RootStyleRegistry({
  children,
}: {
  children: React.ReactNode;
}) {
  const preferredColorScheme = useColorScheme();
  const [colorScheme, setColorScheme] = useLocalStorage<ColorScheme>({
    key: 'carGo-theme',
    defaultValue: preferredColorScheme,
    getInitialValueInEffect: true,
  });

  const cache = useEmotionCache();
  cache.compat = true;

  useServerInsertedHTML(() => (
    <style
      data-emotion={`${cache.key} ${Object.keys(cache.inserted).join(' ')}`}
      dangerouslySetInnerHTML={{
        __html: Object.values(cache.inserted).join(' '),
      }}
    />
  ));

  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));

  useHotkeys([['mod+J', () => toggleColorScheme()]]);

  return (
    <CacheProvider value={cache}>
      <ColorSchemeProvider
        colorScheme={colorScheme}
        toggleColorScheme={toggleColorScheme}
      >
        <MantineProvider
          theme={{
            colorScheme,
          }}
          withGlobalStyles
          withNormalizeCSS
        >
          <Box bg={colorScheme === 'dark' ? 'dark' : 'white'}>
            <Navbar />
            {children}
          </Box>
        </MantineProvider>
      </ColorSchemeProvider>
    </CacheProvider>
  );
}
