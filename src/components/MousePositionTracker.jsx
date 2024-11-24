import React, { useState } from 'react';

function MousePositionTracker() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (event) => {
    setMousePosition({
      x: event.clientX,
      y: event.clientY,
    });
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      Mouse Position: (X: {mousePosition.x}, Y: {mousePosition.y})
    </div>
  );
}

export default MousePositionTracker;

