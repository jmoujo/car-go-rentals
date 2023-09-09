'use client';
import { useAppContext } from '@/context/AppContext';
import { IResRegionProps } from '@/models/res.model';
import { Container, createStyles } from '@mantine/core';
import { useEffect } from 'react';
import { MapContainer, Marker, Popup, TileLayer, useMap } from 'react-leaflet';

interface Props {
  region: IResRegionProps;
  height?: string;
}

const useStyles = createStyles((theme) => ({
  mapContainer: {
    borderRadius: '10px',
    overflow: 'hidden',
    padding: '0',
    boxShadow: theme.shadows.md,
    borderWidth: '1px',
    borderColor: theme.colors.gray[2],
    marginBottom: '1rem',
  },
}));

const Map = ({ region, height }: Props) => {
  const { classes } = useStyles();
  const {
    state: { selectedCountry, selectedRegion },
  } = useAppContext();

  const getCordinates = (): [number, number] => {
    if (selectedRegion) {
      return [selectedRegion.latitude, selectedRegion.longitude];
    }

    if (selectedCountry) {
      return [selectedCountry.latitude, selectedCountry.longitude];
    }

    return [7.9465, 1.0232];
  };

  return (
    <Container size="xl" className={classes.mapContainer}>
      <MapContainer
        center={getCordinates()}
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
        <MapMarker
          latitude={getCordinates()[0]}
          longitude={getCordinates()[1]}
          displayName={
            selectedRegion
              ? selectedRegion.displayName
              : selectedCountry
              ? selectedCountry.displayName
              : 'Ghana'
          }
        />
      </MapContainer>
    </Container>
  );
};

interface MapMarkerProps {
  latitude: number;
  longitude: number;
  displayName: string;
}

const MapMarker = ({ latitude, longitude, displayName }: MapMarkerProps) => {
  const map = useMap();

  useEffect(() => {
    map.setView([latitude, longitude], 14);
  }, [map, latitude, longitude]);

  return (
    <Marker position={[latitude, longitude]}>
      <Popup>{displayName}</Popup>
    </Marker>
  );
};

export default Map;
