import { Box } from "@mui/material";
import Image from "next/image";
import styles from "./styles";

const Avatar = ({
  src = "/women.jpg",
  alt = "profile-image",
  height = 100,
  width = 100,
}) => {
  return (
    <Box sx={{ ...styles.wrapper, height, width }}>
      <Image src={src} alt={alt} height={height} width={width} />
    </Box>
  );
};

export default Avatar;
