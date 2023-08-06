import Person2Icon from "@mui/icons-material/Person2";
import BusinessIcon from "@mui/icons-material/Business";
import SavedSearchIcon from "@mui/icons-material/SavedSearch";

import EmailIcon from "@mui/icons-material/Email";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import PhoneIcon from "@mui/icons-material/Phone";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PersonIcon from "@mui/icons-material/Person";
import PaidIcon from "@mui/icons-material/Paid";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";

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
    title: "Find Similar",
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
  {
    icon: BarChartOutlinedIcon,
    detail:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled",
    description: "Skills",
  },
];
