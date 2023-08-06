import { Box } from "@mui/material";
import Image from "next/image";
import styles from "./styles";

const Avatar = ({
  src = "/women.jpg",
  alt = "profile-image",
  height = "100px",
  width = "100px",
}) => {
  return (
    <Box sx={{ ...styles.wrapper, height, width }}>
      <Image src={src} alt={alt} height={100} width={110} />
    </Box>
  );
};

export default Avatar;
