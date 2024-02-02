import React from "react";
import Button from "@mui/material/Button";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

interface CustomButtonProps {
  filled?: boolean;
  onClick?: () => void;
  children: React.ReactNode;
  buttonMedium?: boolean;
  endIcon?: boolean;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  filled = false,
  onClick,
  children,
  buttonMedium = false,
  endIcon = false,
}) => {
  return (
    <Button
      size={buttonMedium ? "medium" : "small"}
      variant={filled ? "contained" : "outlined"}
      style={{
        backgroundColor: filled ? "#6C54FF" : "transparent",
        color: filled ? "#fff" : "#333",
      }}
      onClick={onClick}
      endIcon={
        endIcon ? (
          <ArrowForwardIosIcon style={{ color: "white", fontSize: "12px" }} />
        ) : null
      }
      className="shadow-none"
    >
      <p className="">{children}</p>
    </Button>
  );
};

export default CustomButton;
