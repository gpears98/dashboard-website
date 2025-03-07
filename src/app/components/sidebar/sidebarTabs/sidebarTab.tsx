import React from "react";

interface SidebarTabProps {
  title: string;
  icon?: React.ReactNode;
  link: string;
}

export default function SidebarTab({ title, icon, link }: SidebarTabProps) {
  return (
    <a href={link} className="flex items-center p-2 hover:bg-gray-700 hover:rounded-sm min-w-full my-5 text-sm">
      {icon && <span className="mr-2">{icon}</span>}
      <span>{title}</span>
    </a>
  );
}
