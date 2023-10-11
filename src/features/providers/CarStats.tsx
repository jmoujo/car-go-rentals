'use client';
import { Divider, Flex, Paper, Text, createStyles, rem } from '@mantine/core';

const useStyles = createStyles((theme) => ({
  statCard: {
    minWidth: '150px',
    padding: theme.spacing.xs,
    paddingTop: theme.spacing.xl,
    minHeight: rem(140),
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    BorderRadius: theme.radius.md,
    boxShadow: theme.shadows.xs,
  },

  title: {
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: theme.spacing.lg,
    color: theme.colors[theme.primaryColor][6],
  },

  label: {
    textTransform: 'uppercase',
    fontWeight: 700,
    fontSize: theme.fontSizes.xs,
    color: theme.colors.gray[6],
    lineHeight: 1.2,
  },

  value: {
    color: theme.colors.gray[6],
  },
}));

const data = [
  { label: 'Sedan', value: 0 },
  { label: 'SUV', value: 0 },
  { label: 'Trucks', value: 0 },
];

export function CarStats() {
  const { classes } = useStyles();

  return (
    <>
      <Divider my={16} mx={16} />
      <Flex wrap="wrap" gap={16} m={rem(16)} sx={{ flex: 1 }}>
        {data.map((stat) => (
          <Paper className={classes.statCard} key={stat.label} withBorder>
            <Text size={24} className={classes.title}>
              {stat.label}
            </Text>
            <div>
              <Text className={classes.label}>Total</Text>
              <Text fz="xs" className={classes.value}>
                {stat.value}
              </Text>
            </div>
          </Paper>
        ))}
      </Flex>
    </>
  );
}
