import React, { useEffect, useState } from 'react';
import './CursorTrail.css';

function CursorTrail() {
  const [trails, setTrails] = useState([]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const pastelColors = [
        '#FFB3BA', // Pastel pink
        '#FFDFBA', // Pastel peach
        '#FFFFBA', // Pastel yellow
        '#BAFFC9', // Pastel green
        '#BAE1FF', // Pastel blue
        '#E0BBE4', // Pastel purple
      ];

      // Pick a random pastel color for this trail dot
      const color = pastelColors[Math.floor(Math.random() * pastelColors.length)];

      const newTrail = {
        id: Date.now() + Math.random(),
        x: e.clientX,
        y: e.clientY,
        color: color,
      };

      setTrails((prev) => [...prev, newTrail]);

      // Remove the trail after 3 seconds
      setTimeout(() => {
        setTrails((prev) => prev.filter((trail) => trail.id !== newTrail.id));
      }, 3000);
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="cursor-trail-container">
      {trails.map((trail) => (
        <div
          key={trail.id}
          className="cursor-trail-dot"
          style={{
            left: `${trail.x}px`,
            top: `${trail.y}px`,
            backgroundColor: trail.color,
          }}
        />
      ))}
    </div>
  );
}

export default CursorTrail;
