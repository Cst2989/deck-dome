import React from 'react';
import { useGlobal } from '../store/state';
const RoomsListing = (props) => {
  const [{ player }] = useGlobal();
  return (
    <div>
      <h2>Hello {player.name}</h2>
    </div>
  );
};

export default RoomsListing;
