const styles = {
  wrapper: {
    color: "#000",
    "& fieldset": { border: "none" },
    "& .MuiInputBase-root": {
      height: "50px",
      width: "fit-content",
      borderRadius: "8px",
      color: "#000",
      "&.Mui-focused": {
        border: "1px solid #EBEBEB",
      },
    },
    "& svg": {
      fill: "#000",
    },
  },

  selectStyles: {
    border: "1px solid #EBEBEB",
    backgroundColor: "#fff",
    marginTop: "0",
    marginBottom: "0",
  },
};

export default styles;
