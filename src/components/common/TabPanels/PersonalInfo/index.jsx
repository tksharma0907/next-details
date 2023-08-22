"use client";

import BreadCrumbs from "@common/BreadCrumbs";
import Button from "@common/Button";
import Details from "@common/DetailRenderer";
import Select from "@common/Select";
import WorkCard from "@common/WorkCard";
import {
  companiesDetail,
  contactDetail,
  detailsConfig,
  locationDetail,
  qualificationDetail,
  skillDetail,
  workConfig,
} from "@constants";
import { useWindowDimensions } from "@hooks";
import SaveIcon from "@mui/icons-material/Save";
import { Box, Divider } from "@mui/material";
import Image from "next/image";
import { useState } from "react";
import Avatar from "../../Avatar";
import styles from "./styles";

const breadcrumbs = [
  { label: "Contacts", href: "/" },
  { label: "Sandra Silva" },
];

const HeaderImages = () => {
  return (
    <>
      <Image src="/facebook.svg" alt="facebook" height={25} width={25} />
      <Image src="/google.svg" alt="google" height={25} width={25} />
      <Image src="/skype.svg" alt="skype" height={25} width={25} />
      <Image src="/twitter.svg" alt="twitter" height={25} width={25} />
      <Image src="/tube.svg" alt="tube" height={25} width={25} />
      <Image src="/git.svg" alt="git" height={25} width={25} />
      <Image src="/insta.svg" alt="insta" height={25} width={25} />
    </>
  );
};

const options = ["Dummy Data"];

const PersonalInfo = () => {
  const [{ width }] = useWindowDimensions();

  const [selectionCriteria, setSelectionCriteria] = useState({});

  const handleChange = (e, name) => {
    setSelectionCriteria((prev) => ({ ...prev, [name]: e?.target?.value }));
  };

  return (
    <Box sx={styles.primaryWrapper(width)}>
      <Box sx={styles.sectionWrapper(width)}>
        {width > 1208 && (
          <Box sx={{ marginBottom: "45px", position: "relative" }}>
            <BreadCrumbs breadcrumb={breadcrumbs} />
            <Box sx={styles.selectWrapper}>
              <Select
                options={options}
                label={
                  <Box sx={styles.selectIconWrapper}>
                    <Image src="/list.svg" alt="list" height={16} width={16} />
                    <Box>Add to Lists</Box>
                  </Box>
                }
                name="lists"
                value={selectionCriteria}
                handleChange={handleChange}
                customStyles={{
                  input: styles.popularitySelectStyles,
                }}
              />
              <Select
                options={options}
                label={
                  <Box sx={styles.selectIconWrapper}>
                    <Image
                      src="/action.svg"
                      alt="action"
                      height={16}
                      width={16}
                    />
                    <Box>Action</Box>
                  </Box>
                }
                name="action"
                value={selectionCriteria}
                handleChange={handleChange}
                customStyles={{
                  input: styles.actionSelectStyles,
                }}
              />
            </Box>
          </Box>
        )}
        {width < 1208 && width > 470 ? (
          <>
            <Box sx={styles.secondaryWrapper}>
              <Avatar />
              <Box sx={styles.topSection}>
                <Box sx={styles.iconsWrapper}>
                  <HeaderImages />
                </Box>
                <Button label="Save Contact" color="white">
                  <SaveIcon />
                </Button>
              </Box>
            </Box>
            <Box sx={styles.name}>
              <Box>Jena Lee</Box>
              <Box sx={styles.iconStyles}>CEO</Box>
            </Box>
          </>
        ) : (
          <Box sx={styles.headerWrapper}>
            <Avatar width={150} height={150} />
            <Box sx={{ ...styles.name, marginTop: "8px" }}>
              <Box>Sandra Silva</Box>
              <Box sx={styles.headerTypo}>CEO at Zoom</Box>
            </Box>
            <Box sx={styles.iconsWrapper}>
              <HeaderImages />
            </Box>
          </Box>
        )}
        <Box>
          As CEO of LinkedIn, I am deeply passionate about connecting
          professionals around the world and empowering them to build meaningful
          careers. In my years with LinkedIn, I've been fortunate to work
          alongside talented and innovative colleagues, and together we have
          developed the world's leading professional networking platform. As CEO
          of LinkedIn, I am deeply passionate about connecting professionals
          around the world and empowering them to build meaningful careers.
        </Box>
        <Box sx={styles.detailsWrapper}>
          {detailsConfig.map(({ icon, description, detail, primary }) => (
            <Details
              key={detail}
              icon={icon}
              description={description}
              detail={detail}
              primary={primary}
            />
          ))}
        </Box>
      </Box>
      <Box
        sx={{
          ...styles.sectionWrapper(width),
          marginTop: "45px",
        }}
      >
        <Box sx={styles.detailsWrapper}>
          {contactDetail.map(({ image, description, detail, ...rest }) => (
            <Details
              key={`${detail}_${description}_${image}`}
              description={description}
              detail={detail}
              image={image}
              {...rest}
            />
          ))}
        </Box>
        <Divider sx={styles.divider} />

        <Box sx={styles.detailsWrapper}>
          {locationDetail.map(({ image, description, detail, ...rest }) => (
            <Details
              key={`${detail}_${description}_${image}`}
              description={description}
              detail={detail}
              image={image}
              {...rest}
            />
          ))}
        </Box>
        <Divider sx={styles.divider} />
        <Box sx={styles.detailsWrapper}>
          {skillDetail.map(({ image, description, detail, ...rest }) => (
            <Details
              key={`${detail}_${description}_${image}`}
              description={description}
              detail={detail}
              image={image}
              {...rest}
            />
          ))}
        </Box>
      </Box>
      <Box sx={styles.sectionWrapper(width)}>
        <Box sx={styles.detailsWrapper}>
          {companiesDetail.map(({ image, description, detail, ...rest }) => (
            <Details
              key={`${detail}_${description}_${image}`}
              description={description}
              detail={detail}
              image={image}
              {...rest}
            />
          ))}
          {workConfig.map(({ ...rest }, idx) => (
            <>
              <WorkCard key={idx} {...rest} />
              {workConfig.length - 1 !== idx && (
                <Divider sx={{ margin: "10px 0" }} />
              )}
            </>
          ))}
          <Divider sx={styles.divider} />
        </Box>
        <Box sx={styles.detailsWrapper}>
          {qualificationDetail.map(
            ({ image, description, detail, ...rest }) => (
              <Details
                key={`${detail}_${description}_${image}`}
                description={description}
                detail={detail}
                image={image}
                {...rest}
              />
            ),
          )}
        </Box>
        <Divider sx={styles.divider} />
      </Box>
    </Box>
  );
};

export default PersonalInfo;
