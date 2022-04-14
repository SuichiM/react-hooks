import { useState, useEffect } from 'react';
import { getLocation } from '../services/locations';

const useLocateAdress = (address) => {
  const [location, setLocation] = useState({});

  useEffect(async () => {
    if (address.length > 3) {
      const locationData = await getLocation(address);
      setLocation(locationData);
    }
  }, [address]);

  return location;
};

export default useLocateAdress;
