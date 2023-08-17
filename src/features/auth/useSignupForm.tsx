import { useForm } from '@mantine/form';

export const useSignupForm = () => {
  const form = useForm({
    initialValues: {
      email: '',
      username: '',
      password: '',
      confirmPassword: '',
      terms: true,
    },

    validate: {
      username: (val: string) => {
        if (val.indexOf(' ') >= 0) {
          return 'Username cannot contain a space';
        }
        if (val.length > 10) {
          return 'Username should be 10 characters or less';
        }
        return null;
      },
      email: (val: string) => (/^\S+@\S+$/.test(val) ? null : 'Invalid email'),
      password: (val: string) =>
        val.length <= 6
          ? 'Password should include at least 6 characters'
          : null,
      confirmPassword: (val: string, { password }) =>
        val !== password ? 'Passwords do not match' : null,
      terms: (terms: boolean) =>
        !terms ? 'You need to accept terms and conditions' : null,
    },
  });

  return form;
};
