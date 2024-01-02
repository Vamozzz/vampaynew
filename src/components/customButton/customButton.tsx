import React from 'react';
import Button from '@mui/material/Button';

interface CustomButtonProps {
  filled?: boolean;
  onClick?: () => void;
  children: React.ReactNode;
}

const CustomButton: React.FC<CustomButtonProps> = ({ filled = false, onClick, children }) => {
  return (
    <Button
      variant={filled ? 'contained' : 'outlined'}
      style={{
        backgroundColor: filled ? '#4CAF50' : 'transparent',
        color: filled ? '#fff' : '#333',
      }}
      onClick={onClick}
    >
      {children}
    </Button>
  );
};

export default CustomButton;
