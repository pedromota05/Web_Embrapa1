import React from 'react';
import Toggle from 'react-toggle';
import 'react-toggle/style.css';

export default function CustomToggle() {
  const handleToggleChange = () => {
    console.log('Toggle changed');
  };

  return (
    <Toggle
      id="toggle"
      icons={false}
      onChange={handleToggleChange}
    />
  );
}
