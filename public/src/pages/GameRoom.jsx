import React from 'react';

const GameRoom = (props) => {
  const roomId = props.match.params.id;
  return (
    <div>
      <h2>Hello World {roomId}</h2>
    </div>
  );
};

export default GameRoom;
