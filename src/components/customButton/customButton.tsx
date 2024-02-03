import React, { CSSProperties } from "react";
import Button from "@mui/material/Button";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

interface CustomButtonProps {
  filled?: boolean;
  onClick?: () => void;
  children: React.ReactNode;
  buttonMedium?: boolean;
  endIcon?: boolean;
  customStyles?: CSSProperties;
  endIconColor?: string | { endIconColor: string };
}

const CustomButton: React.FC<CustomButtonProps> = ({
  filled = false,
  onClick,
  children,
  buttonMedium = false,
  endIcon = false,
  customStyles,
  endIconColor,
}) => {
  return (
    <Button
      size={buttonMedium ? "medium" : "small"}
      variant={filled ? "contained" : "outlined"}
      style={{
        backgroundColor: filled ? "#6C54FF" : "transparent",
        color: filled ? "#fff" : "#333",
        ...customStyles,
      }}
      onClick={onClick}
      endIcon={
        endIcon ? (
          <ArrowForwardIosIcon
            style={{
              color:
                typeof endIconColor === "string"
                  ? endIconColor
                  : endIconColor?.endIconColor || "white",
              fontSize: "12px",
            }}
          />
        ) : null
      }
      className="shadow-none"
    >
      <p className={`p-2 text-[16px] ${!filled ? "px-6" : null}`}>{children}</p>
    </Button>
  );
};

export default CustomButton;
