"use client";

import ClearOutlinedIcon from "@mui/icons-material/ClearOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import { Box } from "@mui/material";
import Image from "next/image";
import styles from "./styles";

const Header = () => {
  return (
    <Box sx={styles.wrapper}>
      <Image
        style={{ marginLeft: "30px" }}
        src="/logo.png"
        alt="logo"
        height={20}
        width={20}
      />
      <Box sx={styles.leftSection}>
        <SettingsOutlinedIcon sx={styles.icon} />
        <ClearOutlinedIcon sx={styles.icon} />
      </Box>
    </Box>
  );
};

export default Header;
