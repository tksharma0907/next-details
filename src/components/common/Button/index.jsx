import React from "react";
import { Box } from "@mui/material";
import styles from "./styles";

const Button = ({ backgroundColor, color, label, onClick, children }) => {
  return (
    <Box
      sx={{
        ...styles.wrapper,
        backgroundColor: "var(--primary)",
        color,
      }}
      onClick={onClick}
    >
      {children}
      {label}
    </Box>
  );
};

export default Button;
