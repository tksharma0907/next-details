import FormControl from "@mui/material/FormControl";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import styles from "./styles";

const DefaultSelect = ({
  label,
  options,
  customStyles,
  handleChange,
  value,
  name,
}) => {
  const ITEM_HEIGHT = 48;
  const ITEM_PADDING_TOP = 8;

  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      },
    },
  };

  return (
    <FormControl sx={{ ...styles.wrapper, ...customStyles?.input }}>
      <Select
        sx={styles.selectStyles}
        displayEmpty
        value={value[name]}
        onChange={(e) => handleChange(e, name)}
        renderValue={(selected) => {
          if (!selected) {
            return <>{label}</>;
          }
          return selected;
        }}
        MenuProps={MenuProps}
        inputProps={{ "aria-label": "Without label" }}
      >
        {options.map((option) => (
          <MenuItem key={option} value={option}>
            {option}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default DefaultSelect;
