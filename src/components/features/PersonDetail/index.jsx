"use client";

import { CustomTab, CustomTabPanel, ThemeToggle } from "@common";
import { CompanyInfo, FindSimilar, PersonalInfo } from "@common/TabPanels";
import { tabConfig } from "@constants";
import { Box } from "@mui/material";
import Tabs from "@mui/material/Tabs";
import { useState } from "react";
import styles from "./styles";

const PersonalDetails = () => {
  const [value, setValue] = useState(0);
  const [themeSetting, setThemeSetting] = useState("light");

  const handleToggle = (_event, themeSetting) => {
    themeSetting && setThemeSetting(themeSetting);
  };

  const handleChange = (_event, newValue) => {
    setValue(newValue);
  };

  console.log(themeSetting);

  return (
    <>
      <Box
        sx={{
          ...styles.wrapper,
          backgroundColor:
            themeSetting === "light" ? "var(--light)" : "var(--dark)",
        }}
      >
        <Box sx={styles.tapWrapper}>
          <Tabs
            value={value}
            onChange={handleChange}
            TabIndicatorProps={{
              style: {
                backgroundColor: "var(--primary)",
              },
            }}
            sx={{
              "& .MuiTab-root.Mui-selected": {
                color: "var(--primary)",
              },
            }}
          >
            {tabConfig.map(({ Icon, title, id }) => (
              <CustomTab key={id} id={id} Icon={Icon} title={title} />
            ))}
          </Tabs>
        </Box>
        <CustomTabPanel value={value} index={0}>
          <PersonalInfo />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
          <CompanyInfo />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={2}>
          <FindSimilar />
        </CustomTabPanel>
      </Box>
    </>
  );
};
export default PersonalDetails;
