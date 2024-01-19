import React from "react";
import Button from "@mui/material/Button";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

interface textButtonProps {
  filled?: boolean;
  onClick?: () => void;
  children: React.ReactNode;
  buttonMedium?: boolean;
  endIcon?: boolean;
}

const TextButton: React.FC<textButtonProps> = ({
  filled = false,
  onClick,
  children,
  buttonMedium = false,
  endIcon = false,
}) => {
  return (
    <Button
      size={buttonMedium ? "medium" : "small"}
      variant={"text"}
      style={{
        color: "#000",
      }}
      onClick={onClick}
      endIcon={
        endIcon ? (
          <ArrowForwardIcon  />
        ) : null
      }
    >
      <p>{children}</p>
    </Button>
  );
};

export default TextButton;
