import { createStyles } from '@mantine/core';

const useStyles = createStyles((theme) => ({
  hideOnMobile: {
    [theme.fn.smallerThan('md')]: {
      display: 'none',
    },
  },

  hideOnDesktop: {
    [theme.fn.largerThan('md')]: {
      display: 'none',
    },
  },

  hideOnBase: {
    [theme.fn.smallerThan('xs')]: {
      display: 'none',
    },
  },
}));

export const useHidden = () => {
  const { classes } = useStyles();

  return {
    hiddenOnDesktop: classes.hideOnDesktop,
    hiddenOnMobile: classes.hideOnMobile,
    hiddenOnSmallScreen: classes.hideOnBase,
  };
};
