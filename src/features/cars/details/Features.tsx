import { Title, Grid, Card, Text, Flex, List, ThemeIcon } from '@mantine/core';
import {
  IconUsers,
  IconManualGearbox,
  IconAirConditioning,
  IconCheck,
} from '@tabler/icons-react';
import { useStyles } from './useStyles';
import { GiCarDoor } from 'react-icons/gi';
export const Features = () => {
  const { classes } = useStyles();
  return (
    <>
      <Title order={5} my="xs">
        Features
      </Title>
      <Grid>
        <Grid.Col xs={6} sm={3}>
          <Card className={classes.mainFeatures}>
            <IconUsers />
            <Text size="xs">Seating Capacity</Text>
            <Text fw="bold" size="xl">
              5
            </Text>
          </Card>
        </Grid.Col>

        <Grid.Col xs={6} sm={3}>
          <Card className={classes.mainFeatures}>
            <IconManualGearbox />
            <Text size="xs">Transmission</Text>
            <Text fw="bold">Automatic</Text>
          </Card>
        </Grid.Col>

        <Grid.Col xs={6} sm={3}>
          <Card className={classes.mainFeatures}>
            <IconUsers />
            <Text size="xs">Fuel Type</Text>
            <Text fw="bold">Gasoline</Text>
          </Card>
        </Grid.Col>

        <Grid.Col xs={6} sm={3}>
          <Card className={classes.mainFeatures}>
            <IconUsers />
            <Text size="xs">Engine Capacity</Text>
            <Text fw="bold">2.0L</Text>
          </Card>
        </Grid.Col>
      </Grid>

      <Grid align="flex-start" my="md">
        <Grid.Col sm={6}>
          <Card>
            <List
              spacing="xs"
              size="sm"
              center
              icon={
                <ThemeIcon color="blue" size={24} radius="xl">
                  <IconCheck size="1rem" />
                </ThemeIcon>
              }
            >
              <List.Item>Bluetooth</List.Item>
              <List.Item>Backup Camera</List.Item>
              <List.Item>Keyless Entry</List.Item>
              <List.Item>Apple CarPlay</List.Item>
            </List>
          </Card>
        </Grid.Col>
        <Grid.Col sm={6}>
          <Card>
            <Flex gap="md" align="center">
              <IconAirConditioning />
              <Text>Air Conditioning</Text>
            </Flex>

            <Flex gap="md" align="center" my="md">
              <GiCarDoor />
              <Text>4 Doors</Text>
            </Flex>
          </Card>
        </Grid.Col>
      </Grid>
    </>
  );
};
