import React, { useState } from "react";
import { FaSuitcase } from "react-icons/fa";
import { LuBox, LuCalendar, LuMessageSquare, LuUser } from "react-icons/lu";
import { TbUser } from "react-icons/tb";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [activeLinks, setActiveLinks] = useState(0);
  const handleLinkClick = (index) => {
    setActiveLinks(index);
  };
  const SIDEBAR_LINKS = [
    { id: 1, path: "/", name: "Dashboard", icon: LuBox },
    { id: 2, path: "/members", name: "Members", icon: TbUser },
    { id: 3, path: "/message", name: "Messages", icon: LuMessageSquare },
    { id: 4, path: "/projects", name: "Projects", icon: FaSuitcase },
    { id: 5, path: "/clients", name: "Clients", icon: LuUser },
    { id: 6, path: "/work", name: "Work", icon: LuCalendar },
  ];
  return (
    <div className="w-16 md:w-56 fixed left-0 top-0 z-10 h-screen border-r px-4 bg-white">
      {/* logl */}
      <div className="mb-8">
        <img
          src="https://niyaskknr.vercel.app/image/logo.png"
          className="w-10 mt-5 hidden md:flex"
          alt="logo"
        />
        <img
          src="https://niyaskknr.vercel.app/image/logo.png"
          className="w-8  flex md:hidden"
          alt="logo"
        />
      </div>
      {/* nav */}
      <ul className="mt-6 space-y-6">
        {SIDEBAR_LINKS.map((link, index) => (
          <li
            key={index}
            className={`font-medium rounded-md px5 py-2 hover:bg-gray-100 hover:text-indigo-500 ${
              activeLinks === index ? "bg-indigo-100 text-indigo-500" : ""
            }`}
          >
            <Link
              onClick={() => handleLinkClick(index)}
              to={link.path}
              className="flex justify-center md:justify-start items-center md:space-x-5"
            >
              <span className="md:ml-3">{React.createElement(link.icon)}</span>
              <span className="text-sm text-gray-500 hidden md:flex">
                {link.name}
              </span>
            </Link>
          </li>
        ))}
      </ul>
      <div className="w-full absolute bottom-5 left-0 px-4 py-2 cursor-pointer text-center">
        <p className="flex items-center space-x-2 text-xs text-white py-2 px-5 bg-gradient-to-r from-indigo-500 to-violet-600 rounded-full">
          <span>?</span> <span className="hidden md:flex">Need Help</span>
        </p>
      </div>
    </div>
  );
};

export default Sidebar;
