import React from "react";
import Image from "next/image";

const NavBar: React.FC = () => {
  return (
    <nav className="flex items-center justify-between px-4 py-2 bg-gray-800 text-white">
      <div className="flex-1 mx-4 bg-gray-700 max-w-1/5 rounded-sm">
        <input
          type="text"
          placeholder="Search..."
          className="w-full px-3 py-2 rounded-md focus:outline-none"
        />
      </div>
      <div className="flex items-center">
        <div className="flex items-center hover:bg-gray-700 p-2 rounded-md">
          <div className="relative w-10 h-10">
            <Image
              src="/mclogo.png"
              alt="Profile Picture"
              layout="fill"
              className="rounded-full"
            />
          </div>
          <div className="ml-2 hidden md:block">
            <p className="font-semibold">John Doe</p>
            <p className="text-xs text-gray-400">Admin</p>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
