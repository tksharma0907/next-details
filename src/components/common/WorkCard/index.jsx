import { Box } from "@mui/material";
import Image from "next/image";
import styles from "./styles";

const WorkCard = ({ image, description, detail }) => {
  return (
    <Box sx={styles.wrapper}>
      <Image src={image} alt="logo" height={50} width={50} />
      <Box sx={styles.infoWrapper}>
        <Box sx={styles.des}>{description}</Box>
        <Box sx={styles.detail}>{detail}</Box>
      </Box>
    </Box>
  );
};

export default WorkCard;
