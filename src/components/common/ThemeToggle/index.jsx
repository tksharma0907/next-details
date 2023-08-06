import Image from "next/image";
import Paper from "@mui/material/Paper";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import styles from "./styles";

const ThemeToggle = ({ handleToggle, themeSetting }) => {
  return (
    <Paper elevation={0} sx={styles.toggleGroupWrapper}>
      <ToggleButtonGroup
        value={themeSetting}
        exclusive
        onChange={handleToggle}
        aria-label="theme toggle"
        sx={styles.toggleWrapper}
      >
        <ToggleButton value="light">
          <Image
            src={themeSetting === "light" ? "/sun.svg" : "/sunDark.png"}
            alt="sun"
            height={22}
            width={22}
          />
          Light
        </ToggleButton>
        <ToggleButton value="dark">
          <Image
            src={themeSetting === "dark" ? "/moonWhite.png" : "/moon.svg"}
            alt="moon"
            height={22}
            width={22}
          />
          Dark
        </ToggleButton>
      </ToggleButtonGroup>
    </Paper>
  );
};

export default ThemeToggle;
