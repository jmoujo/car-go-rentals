'use client';
import { IUserProfileContext } from '@/models/app';
import { IReqUserProps } from '@/models/req.model';
import { useRouter } from 'next/navigation';
import { ReactNode, createContext, useContext } from 'react';
import { useSupabase } from './SupabaseContext';

const UserProfileContext = createContext<IUserProfileContext>(undefined as any);

interface Props {
  children: ReactNode;
}
export const UserProfileContextProvider = ({ children }: Props) => {
  const supabase = useSupabase();
  const router = useRouter();

  const updateProfileInfo = async (user: any) => {
    const { error } = await supabase.auth.updateUser({ data: { ...user } });
    if (error) throw new Error(error.message);

    const { error: updateUserError } = await supabase.auth.refreshSession();

    if (updateUserError) throw new Error(updateUserError.message);

    router.refresh();
  };

  const updateAvatar = async (avatarUrl: string) => {
    // update user avatar url
    await updateProfileInfo({
      avatar: avatarUrl,
    });
  };

  return (
    <UserProfileContext.Provider
      value={{
        updateProfileInfo,
        updateAvatar,
      }}
    >
      {children}
    </UserProfileContext.Provider>
  );
};

export const useUserProfileContext = () => {
  const context = useContext(UserProfileContext);
  return context;
};
