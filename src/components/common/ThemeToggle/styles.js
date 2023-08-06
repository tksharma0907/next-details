const styles = {
  toggleGroupWrapper: {
    padding: "0 15px",
  },

  toggleWrapper: {
    "& .MuiToggleButton-root": {
      width: "110px",
      height: "37px",
      gap: "11px",
      borderRadius: "12px",
      fontSize: "14px",
      color: "custom.heading",
    },
    "& .MuiToggleButton-root.Mui-selected": {
      backgroundColor: "var(--primary)",
      color: "white",
      "&:hover": {
        backgroundColor: "var(--primary)",
      },
    },
  },
};

export default styles;
