import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Box } from "@mui/material";
import React from "react";
import styles from "./styles";

const BreadCrumbs = ({ breadcrumb }) => {
  return (
    <Box sx={styles.breadCrumbWrapper}>
      {breadcrumb.map(({ label, href = null }, idx) => {
        return (
          <Box
            key={`${href}_${label}}`}
            sx={{
              ...styles.wrapper,
              ...(href && {
                cursor: "pointer",
              }),
            }}
          >
            <Box sx={styles.breadCrumbHover(href)}>{label}</Box>
            {breadcrumb.length - 1 !== idx && (
              <ArrowForwardIosIcon sx={styles.breadCrumbIcon} />
            )}
          </Box>
        );
      })}
    </Box>
  );
};

export default BreadCrumbs;
