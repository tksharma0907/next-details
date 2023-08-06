"use client";
import { Box } from "@mui/material";
import Tab from "@mui/material/Tab";
import React from "react";
import styles from "./styles";

const CustomTab = ({ Icon, title, id, ...rest }) => {
  const IconComponent = React.createElement(Icon);

  return (
    <Tab
      label={
        <Box sx={styles.wrapper}>
          {IconComponent}
          {title && (
            <Box
              sx={{
                "& .Mui-selected": {
                  color: "red",
                },
              }}
            >
              {title}
            </Box>
          )}
        </Box>
      }
      id={id}
      {...rest}
    />
  );
};

export default CustomTab;
