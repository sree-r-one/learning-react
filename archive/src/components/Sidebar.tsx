import React from "react";
import { NavLink } from "react-router-dom";

interface sidebarProps {
  className?: string;
}

const Sidebar: React.FC<sidebarProps> = ({ className }) => {
  return (
    <aside
      className={`bg-gray-800 p-4 text-white ${className} hidden md:block`}
    >
      <div className="flex flex-col space-y-4">
        <NavLink
          to="/usestate"
          className={({ isActive }) => (isActive ? "bg-red-400" : "")}
        >
          UseState
        </NavLink>
        <NavLink
          to="/useeffect"
          className={({ isActive }) => (isActive ? "bg-red-400" : "")}
        >
          UseEffect
        </NavLink>
        <NavLink
          to="/usecontext"
          className={({ isActive }) => (isActive ? "bg-red-400" : "")}
        >
          UseContext
        </NavLink>
        <NavLink
          to="/html"
          className={({ isActive }) => (isActive ? "bg-red-400" : "")}
        >
          HTML Input
        </NavLink>
        <NavLink
          to="/academind"
          className={({ isActive }) => (isActive ? "bg-red-400" : "")}
        >
          Academind
        </NavLink>
      </div>
    </aside>
  );
};

export default Sidebar;
