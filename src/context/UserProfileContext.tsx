'use client';
import { IUserProfileContext, UpdatedRes } from '@/models/app';
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

  const updateProfileInfo = async (user: Omit<IReqUserProps, 'username'>) => {
    let res: UpdatedRes = { updatedUser: null, error: null };

    try {
      await supabase.auth.updateUser({ data: { ...user } });
      const {
        data: { user: updatedUser },
      } = await supabase.auth.refreshSession();
      res = { ...res, updatedUser };
    } catch (error: any) {
      res = { ...res, error };
    }

    router.refresh();
    return res;
  };

  return (
    <UserProfileContext.Provider
      value={{
        updateProfileInfo,
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
