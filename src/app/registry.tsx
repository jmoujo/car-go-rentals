'use client';

import { AppContextProvider } from '@/context/AppContext';
import { AuthContextProvider } from '@/context/AuthContext';
import { SupabaseContextProvider } from '@/context/SupabaseContext';
import { UserProfileContextProvider } from '@/context/UserProfileContext';
import { CacheProvider } from '@emotion/react';
import {
  Box,
  ColorScheme,
  ColorSchemeProvider,
  MantineProvider,
  useEmotionCache,
} from '@mantine/core';
import { useColorScheme, useHotkeys, useLocalStorage } from '@mantine/hooks';
import {
  Session,
  User,
  createClientComponentClient,
} from '@supabase/auth-helpers-nextjs';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { useServerInsertedHTML } from 'next/navigation';
import { useEffect, useState } from 'react';
import { ToastContainer } from 'react-toastify';

const queryClient = new QueryClient();

export default function RootStyleRegistry({
  children,
}: {
  children: React.ReactNode;
}) {
  const [session, setSession] = useState<Session | null>(null);
  const [user, setUser] = useState<User | undefined>(undefined);
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

  // subscribing to auth state change
  const supabase = createClientComponentClient();

  useEffect(() => {
    const { data: authListener } = supabase.auth.onAuthStateChange(
      async (_event, session) => {
        setSession(session);
        setUser(session?.user);
      }
    );

    return () => {
      authListener.subscription.unsubscribe();
    };
  }, [supabase.auth]);

  return (
    <SupabaseContextProvider>
      <AuthContextProvider user={user} session={session}>
        <QueryClientProvider client={queryClient}>
          <ReactQueryDevtools initialIsOpen={false} />
          <AppContextProvider>
            <UserProfileContextProvider>
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
                    <Box
                      bg={colorScheme === 'dark' ? 'dark' : 'white'}
                      mih="100vh"
                    >
                      {children}
                      <ToastContainer />
                    </Box>
                  </MantineProvider>
                </ColorSchemeProvider>
              </CacheProvider>
            </UserProfileContextProvider>
          </AppContextProvider>
        </QueryClientProvider>
      </AuthContextProvider>
    </SupabaseContextProvider>
  );
}
