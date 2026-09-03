import { createContext, useState } from 'react';

export const LocationContext = createContext();

export const LocationProvider = ({ children }) => {
  const [coordinates, setCoordinates] = useState(null);
  const [locationError, setLocationError] = useState(null);

  const requestLocation = () => {
    setLocationError(null);

    navigator.geolocation.getCurrentPosition(
      (position) => {
        setCoordinates({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        });
      },
      (error) => {
        setLocationError(error.message);
      },
    );
  };

  return (
    <LocationContext.Provider
      value={{
        coordinates,
        locationError,
        requestLocation,
      }}
    >
      {children}
    </LocationContext.Provider>
  );
};