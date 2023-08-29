'use client';
import { IUserProfileContext } from '@/models/app';
import { IReqUserProps } from '@/models/req.model';
import { useRouter } from 'next/navigation';
import { ReactNode, createContext, useContext } from 'react';
import { useSupabase } from './SupabaseContext';
import { supabaseUrl } from '@/const';

const UserProfileContext = createContext<IUserProfileContext>(undefined as any);

interface Props {
  children: ReactNode;
}
export const UserProfileContextProvider = ({ children }: Props) => {
  const supabase = useSupabase();
  const router = useRouter();

  const updateProfileInfo = async (user: Omit<IReqUserProps, 'username'>) => {
    const { error } = await supabase.auth.updateUser({ data: { ...user } });
    if (error) throw new Error(error.message);

    const { error: updateUserError } = await supabase.auth.refreshSession();

    if (updateUserError) throw new Error(updateUserError.message);

    router.refresh();
  };

  const updateAvatar = async (avatarUrl: string) => {
    // get current user
    // const { data, error } = await supabase.auth.getUser();

    // if (error) throw new Error(error.message);

    // // upload avatar to storage
    // const fileName = `avatar-${data.user.id}-${Math.random()}-${avatar.name}`;
    // const { error: storageError } = await supabase.storage
    //   .from('avatars')
    //   .upload(fileName, avatar);

    // if (storageError) throw new Error(storageError.message);

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
