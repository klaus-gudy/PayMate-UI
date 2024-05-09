import { SideNavItemGroup } from "@/types/types";
import {
  BsCalendarFill,
  BsFileBarGraphFill,
  BsFillPersonLinesFill,
  BsGearFill,
  BsHouseDoorFill,
  BsPersonFill,
  BsQuestionCircleFill,
  BsShieldFillCheck,
} from "react-icons/bs";

export const SIDENAV_ITEMS: SideNavItemGroup[] = [
  {
    title: "Dashboards",
    menuList: [
      {
        title: "Dashboard",
        path: "/Dashboard",
        icon: <BsHouseDoorFill size={20} />,
      },
    ],
  },
  {
    title: "Manage",
    menuList: [
      {
        title: "Patient Records",
        path: "/Records",
        icon: BsFillPersonLinesFill({ size: 20 }),
        submenu: true,
        subMenuItems: [
          { title: "Children", path: "/Records/Child" },
          { title: "Parent", path: "/Records/Mother" },
        ],
      },
      {
        title: "Hospital Visits",
        path: "/Visits",
        icon: BsCalendarFill({ size: 20 }),
        submenu: true,
        subMenuItems: [
          { title: "Initial Visits", path: "/Visits/BeforeCard" },
          { title: "Later Visits", path: "/Visits/AfterCard" },
          { title: "Consultation Visits", path: "/Visits/ConsultationVisit" },
        ],
      },
      {
        title: "Reports/Analytics",
        path: "/Reports",
        icon: BsFileBarGraphFill({ size: 20 }),
      },
      {
        title: "Immunisation",
        path: "/Immunisation",
        icon: BsShieldFillCheck({ size: 20 }),
      },
    ],
  },
  {
    title: "Others",
    menuList: [
      {
        title: "Settings/Administration",
        path: "/Settings",
        icon: BsGearFill({ size: 20 }),
      },
      {
        title: "User Account",
        path: "/Account",
        icon: BsPersonFill({ size: 20 }),
      },
      {
        title: "Help/Support",
        path: "/Support",
        icon: BsQuestionCircleFill({ size: 20 }),
      },
    ],
  },
];
