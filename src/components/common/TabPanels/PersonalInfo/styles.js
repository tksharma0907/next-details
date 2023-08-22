const styles = {
  primaryWrapper: (width) => ({
    display: "flex",
    gap: "60px",
    ...(width < 1208 && {
      flexDirection: "column",
      gap: "10px",
    }),
  }),

  sectionWrapper: (width) => ({
    width: "32%",
    ...(width < 1208 && {
      width: "100%",
    }),
  }),

  secondaryWrapper: {
    display: "flex",
    gap: "30px",
  },

  iconsWrapper: {
    display: "flex",
    gap: "10px",
    marginTop: "18px",
    marginBottom: "20px",
  },

  name: {
    display: "flex",
    flexDirection: "column",
    gap: "8px",
  },

  topSection: {
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "column",
  },

  icon: {
    color: "grey",
    width: "30px",
    height: "30px",
    cursor: "pointer",
  },

  detailsWrapper: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    marginTop: "20px",
  },

  divider: {
    marginTop: "20px",
    marginBottom: "60px",
  },

  headerWrapper: {
    fontSize: "14px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },

  headerTypo: {
    color: "#6C2BD9",
  },

  selectIconWrapper: {
    display: "flex",
    gap: "10px",
    alignItems: "center",
  },

  popularitySelectStyles: {
    "& .MuiInputBase-root": {
      height: "34px",
      width: "150px",
      padding: "10px 0",
      fontSize: "14px",
      borderRadius: "8px",
    },
  },

  actionSelectStyles: {
    "& .MuiInputBase-root": {
      height: "34px",
      width: "120px",
      padding: "10px 0",
      fontSize: "14px",
      borderRadius: "8px",
    },
  },

  selectWrapper: {
    position: "absolute",
    top: "-8px",
    right: "-50px",
    display: "flex",
    gap: "10px",
  },
};

export default styles;
