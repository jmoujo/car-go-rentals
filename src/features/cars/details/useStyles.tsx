import { createStyles } from '@mantine/core';

export const boxBgColor = { light: 'white', dark: 'dark.6' };
export const containerBgColor = { light: 'gray.1', dark: 'gray.9' };

const styles = createStyles((theme) => {
  return {
    box: {
      borderRadius: '6px',
      boxShadow: theme.shadows.xs,
      padding: '1rem',
      boxSizing: 'border-box',
    },

    mainFeatures: {
      textAlign: 'center',
      margin: 'auto',
      svg: {
        color: 'orange',
      },
    },
  };
});

export const useStyles = () => {
  return styles();
};
