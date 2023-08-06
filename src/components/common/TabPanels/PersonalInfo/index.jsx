"use client";

import Button from "@common/Button";
import { detailsConfig } from "@constants";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import GitHubIcon from "@mui/icons-material/GitHub";
import GoogleIcon from "@mui/icons-material/Google";
import InstagramIcon from "@mui/icons-material/Instagram";
import SaveIcon from "@mui/icons-material/Save";
import SubscriptionsRoundedIcon from "@mui/icons-material/SubscriptionsRounded";
import TwitterIcon from "@mui/icons-material/Twitter";
import { Box } from "@mui/material";
import React from "react";
import Avatar from "../../Avatar";
import styles from "./styles";

const Details = ({ icon, description, detail, primary }) => {
  const IconComponent = React.createElement(icon);

  return (
    <Box sx={styles.detailWrapper}>
      <Box sx={styles.detailsLeftSection}>
        <Box sx={styles.iconStyles}>{IconComponent}</Box>
        <Box
          sx={{
            color: primary ? "var(--primary)" : "grey",
          }}
        >
          {description}
        </Box>
      </Box>
      <Box sx={styles.detailInfo}>{detail}</Box>
    </Box>
  );
};

const PersonalInfo = () => {
  return (
    <Box sx={styles.primaryWrapper}>
      <Box sx={styles.secondaryWrapper}>
        <Avatar />
        <Box sx={styles.topSection}>
          <Box sx={styles.iconsWrapper}>
            <FacebookRoundedIcon sx={styles.icon} />
            <GoogleIcon sx={styles.icon} />
            <TwitterIcon sx={styles.icon} />
            <GitHubIcon sx={styles.icon} />
            <InstagramIcon sx={styles.icon} />
            <SubscriptionsRoundedIcon sx={styles.icon} />
          </Box>
          <Button label="Save Contact" color="white">
            <SaveIcon />
          </Button>
        </Box>
      </Box>
      <Box sx={styles.name}>
        <Box>Jena Lee</Box>
        <Box sx={styles.iconStyles}>CEO</Box>
      </Box>
      <Box>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </Box>
      <Box sx={styles.detailsWrapper}>
        {detailsConfig.map(({ icon, description, detail, primary }) => (
          <Details
            key={detail}
            icon={icon}
            description={description}
            detail={detail}
            primary={primary}
          />
        ))}
      </Box>
    </Box>
  );
};

export default PersonalInfo;
