const styles = {
  wrapper: {
    display: "flex",
    gap: "23px",
    fontSize: "14px",
    fontWeight: 400,
    cursor: "default",
  },

  breadCrumbWrapper: {
    display: "flex",
    gap: "16px",
    alignItems: "center",
  },

  breadCrumbIcon: {
    marginTop: "4px",
    width: "13px",
    height: "13px",
    color: "#9CA3AF",
  },

  breadCrumbHover: (href) => ({
    display: "flex",
    alignItems: "center",
    ...(href && {
      ":hover": {
        color: "#2697FF",
      },
    }),
  }),

  breadCrumbHoverTypo: (href) => ({}),
};

export default styles;
