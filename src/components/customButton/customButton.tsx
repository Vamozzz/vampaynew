import React from "react";
import Button from "@mui/material/Button";

interface CustomButtonProps {
  filled?: boolean;
  onClick?: () => void;
  children: React.ReactNode;
  buttonSize?: "small" | "large" | "medium";
}

const CustomButton: React.FC<CustomButtonProps> = ({
  filled = false,
  onClick,
  children,
  buttonSize,
}) => {
  return (
    <Button
      size={buttonSize || "small"}
      variant={filled ? "contained" : "outlined"}
      style={{
        backgroundColor: filled ? "#6C54FF" : "transparent",
        color: filled ? "#fff" : "#333",
      }}
      onClick={onClick}
    >
      {children}
    </Button>
  );
};

export default CustomButton;
