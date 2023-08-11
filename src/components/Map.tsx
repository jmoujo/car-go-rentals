'use client';
import { Region } from '@/models/app';
import { Container, createStyles } from '@mantine/core';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';

interface Props {
  region: Region;
  height?: string;
}

const useStyles = createStyles((theme) => ({
  mapContainer: {
    borderRadius: '10px',
    overflow: 'hidden',
    padding: '0',
    background: 'green',
    boxShadow: theme.shadows.md,
    borderWidth: '1px',
    borderColor: theme.colors.gray[2],
    marginBottom: '1rem',
  },
}));

const Map = ({ region, height }: Props) => {
  const { classes } = useStyles();
  const { label, latitude, longitude } = region;

  return (
    <Container size="xl" className={classes.mapContainer}>
      <MapContainer
        center={[latitude, longitude]}
        zoom={14}
        style={{
          height: height || '300px',
          width: '100%',
          zIndex: 0,
          margin: 0,
        }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={[latitude, longitude]}>
          <Popup>{label}</Popup>
        </Marker>
      </MapContainer>
    </Container>
  );
};

export default Map;
