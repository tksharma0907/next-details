"use client";

import { Box } from "@mui/material";
import Image from "next/image";
import React from "react";
import styles from "./styles";



const Details = ({
  icon = "",
  description = "",
  detail = "",
  primary = "",
  image = "",
  heading = false,
  bullet = false,
  primaryDes = false,
}) => {
  const IconComponent = React.createElement(icon);

  return (
    <Box sx={styles.detailWrapper}>
      <Box
        sx={{
          ...styles.detailsLeftSection,
          ...(heading && { color: "#000", marginBottom: "6px" }),
          ...(bullet && {
            marginLeft: "6px",
            gap: "18px",
          }),
        }}
      >
        {icon && (
          <Box
            sx={{
              ...styles.iconStyles,
              ...(bullet && {
                "& svg": {
                  width: "10px",
                  height: "10px",
                },
              }),
            }}
          >
            {IconComponent}
          </Box>
        )}
        {image && <Image src={image} alt="icon" height={25} width={25} />}
        {description && (
          <Box
            sx={{
              color: primary ? "var(--primary)" : "grey",
              ...(heading && { color: "#000" }),
            }}
          >
            {description}
          </Box>
        )}
      </Box>
      {detail && (
        <Box
          sx={{
            ...styles.detailInfo,
            ...(primaryDes && {
              color: "#6C2BD9",
            }),
          }}
        >
          {detail}
        </Box>
      )}
    </Box>
  );
};

export default Details;
