import BusinessIcon from "@mui/icons-material/Business";
import Person2Icon from "@mui/icons-material/Person2";
import SavedSearchIcon from "@mui/icons-material/SavedSearch";

import BookmarkIcon from "@mui/icons-material/Bookmark";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import CircleRoundedIcon from "@mui/icons-material/CircleRounded";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PaidIcon from "@mui/icons-material/Paid";
import PersonIcon from "@mui/icons-material/Person";
import PhoneIcon from "@mui/icons-material/Phone";

export const tabConfig = [
  {
    Icon: Person2Icon,
    title: "Personal",
    id: 0,
  },
  {
    Icon: BusinessIcon,
    title: "Company",
    id: 1,
  },
  {
    Icon: SavedSearchIcon,
    title: "Lists",
    id: 2,
  },
];

export const detailsConfig = [
  {
    icon: EmailIcon,
    detail: "Bussiness",
    description: "View email address",
    primary: true,
  },
  {
    icon: BookmarkIcon,
    detail: "HQ",
    description: "View HQ number",
    primary: true,
  },
  {
    icon: PhoneIcon,
    detail: "mobile",
    description: "View mobile address",
    primary: true,
  },
  {
    icon: BusinessCenterIcon,
    detail: "C-Level",
    description: "Seniority",
  },
  {
    icon: LocationOnIcon,
    detail: "New York, NY, USA",
    description: "Location",
  },
  {
    icon: PersonIcon,
    detail: "Female",
    description: "Gender",
  },
  {
    icon: PaidIcon,
    detail: "$14M",
    description: "Funding",
  },
];

export const contactDetail = [
  {
    image: "/information-circle.svg",
    description: "Contact Information",
    heading: true,
  },
  {
    image: "/mail.svg",
    description: "Mail",
  },

  {
    icon: CircleRoundedIcon,
    detail: "View email address",
    description: "Business Email",
    bullet: true,
    primaryDes: true,
  },
  {
    icon: CircleRoundedIcon,
    detail: "View email address",
    description: "Personal Mail",
    bullet: true,
    primaryDes: true,
  },
  {
    icon: CircleRoundedIcon,
    detail: "View email address",
    description: "Other Mail",
    bullet: true,
    primaryDes: true,
  },
  {
    image: "/phone.svg",
    description: "Phone",
  },
  {
    icon: CircleRoundedIcon,
    detail: "View mobile address",
    description: "Work Phone",
    bullet: true,
    primaryDes: true,
  },
  {
    icon: CircleRoundedIcon,
    detail: "View mobile address",
    description: "Personal Phone",
    bullet: true,
    primaryDes: true,
  },
  {
    icon: CircleRoundedIcon,
    detail: "View mobile address",
    description: "Other Phone",
    bullet: true,
    primaryDes: true,
  },
];

export const locationDetail = [
  {
    image: "/globe.svg",
    description: "Locations Worked at",
    heading: true,
  },
  {
    image: "/location.svg",
    description: "New York, NY, USA",
  },
  {
    image: "/location.svg",
    description: "Huston Texas, USA",
  },
  {
    image: "/location.svg",
    description: "Los Angeles California, USA",
  },
];

export const skillDetail = [
  {
    image: "/information-circle.svg",
    description: "Skills",
    heading: true,
    detail:
      "Microsoft Office, Microsoft Excel, Leadership, Microsoft Word, Research, Powerpoint, Public Speaking, Social Media, Marketing",
  },
];

export const qualificationDetail = [
  {
    image: "/cap.svg",
    description: "Qualifications",
    heading: true,
  },
  {
    image: "/book.svg",
    description: "Master of Science, Economics",
  },
  {
    image: "/book.svg",
    description: "Bachelor of Science, Economics",
  },
];

export const companiesDetail = [
  {
    image: "/briefcase.svg",
    description: "Companies Worked at",
    heading: true,
  },
];

export const workConfig = [
  { image: "/zoom.jpg", description: "Zoom", detail: "2020 - Present" },
  { image: "/netflix.jpg", description: "Netflix", detail: "2019 - 2020" },
  { image: "/adobe.jpg", description: "Adobe", detail: "2015 - 2019" },
  { image: "/atlassian.jpg", description: "Atlassian", detail: "2012 - 2015" },
];
