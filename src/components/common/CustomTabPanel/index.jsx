import { Box } from "@mui/material";
import styles from "./styles";

const CustomTabPanel = (props) => {
  const { children, value, index, ...rest } = props;

  return (
    <Box
      role="tab-panel"
      hidden={value !== index}
      id={`tab-panel-${index}`}
      {...rest}
    >
      {value === index && <Box sx={styles.childWrapper}>{children}</Box>}
    </Box>
  );
};

export default CustomTabPanel;
