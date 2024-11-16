import React, { useState, useEffect } from 'react';

// Define types for position
interface Position {
  x: number;
  y: number;
}

const MovableCircle: React.FC = () => {
  // State to track the circle's position
  const [position, setPosition] = useState<Position>({ x: 200, y: 200 });

  // Function to move the circle by calling the backend using fetch
  const moveCircle = async (direction: string) => {
    try {
      // Send a POST request to the backend with the direction using fetch
      const response = await fetch(
        `http://localhost:8080/api/movement?direction=${direction}`,
        {
          method: 'POST', // HTTP method
        }
      );

      // Check if the response is OK (status 200-299)
      if (!response.ok) {
        throw new Error('Failed to move the circle');
      }

      // Parse the JSON response
      const data: Position = await response.json();

      // Update the state with the new position from backend
      setPosition(data);
    } catch (error) {
      console.error('Error moving the circle:', error);
    }
  };

  // Handle key presses (W, A, S, D)
  const handleKeyPress = (e: KeyboardEvent) => {
    switch (e.key) {
      case 'w':
        moveCircle('up');
        break;
      case 'a':
        moveCircle('left');
        break;
      case 's':
        moveCircle('down');
        break;
      case 'd':
        moveCircle('right');
        break;
      default:
        break;
    }
  };

  // Add event listener for keydown when the component is mounted
  useEffect(() => {
    window.addEventListener('keydown', handleKeyPress);

    // Cleanup event listener when component unmounts
    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, []);

  return (
    <div
      style={{
        position: 'relative',
        width: '100vw',
        height: '100vh',
        backgroundColor: 'lightgray',
        overflow: 'hidden',
      }}
    >
      {/* Circle */}
      <div
        style={{
          position: 'absolute',
          top: position.y,
          left: position.x,
          width: '50px',
          height: '50px',
          backgroundColor: 'blue',
          borderRadius: '50%',
        }}
      />
    </div>
  );
};

export default MovableCircle;

