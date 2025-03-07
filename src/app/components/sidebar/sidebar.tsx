import React from "react";
import Image from "next/image";
import SidebarTab from "./sidebarTabs/sidebarTab";
import DashboardIcon from "@mui/icons-material/Dashboard";
import SettingsIcon from "@mui/icons-material/Settings";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import BedtimeIcon from '@mui/icons-material/Bedtime';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import EventSeatIcon from '@mui/icons-material/EventSeat';
import AssessmentIcon from '@mui/icons-material/Assessment';
import FolderIcon from '@mui/icons-material/Folder';

interface Tab {
  title: string;
  icon?: React.ReactNode;
  link: string;
}

const tabs: Tab[] = [
  { title: "Dashboard", icon: <DashboardIcon />, link: "/dashboard" },
  { title: "Opening Procedures", icon: <WbSunnyIcon />, link: "/opening" },
  { title: "Closing Procedures", icon: <BedtimeIcon />, link: "/closing" },
  { title: "Calendar", icon: <CalendarMonthIcon />, link: "/calendar" },
  { title: "Reservations", icon: <EventSeatIcon />, link: "/reservations" },
  { title: "Reports", icon: <AssessmentIcon />, link: "/reports" },
  { title: "Documents", icon: <FolderIcon />, link: "/documents" },
  { title: "Settings", icon: <SettingsIcon />, link: "/settings" },
  { title: "Profile", icon: <AccountCircleIcon />, link: "/profile" },
];

export default function Sidebar() {
  return (
    <div className="flex flex-col items-center w-1/8 min-w-fit max-w-xs min-h-screen bg-gray-800">
      <div className="flex flex-col items-center w-full">
        <Image src="/mclogo.png" width={200} height={200} alt="Logo" />
        <div className="flex flex-col items-start w-5/6 mt-5">
          {tabs.map((tab, index) => (
            <SidebarTab
              key={index}
              title={tab.title}
              icon={tab.icon}
              link={tab.link}
            />
          ))}
        </div>
      </div>
      <div className="mt-auto w-3/4 flex flex-col items-center">
        <div className="flex flex-col text-xs p-2">
          <p>gpdev LLC</p>
        </div>
      </div>
    </div>
  );
}
