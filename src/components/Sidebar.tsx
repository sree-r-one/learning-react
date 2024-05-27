import React from "react";
import { Link } from "react-router-dom";

interface sidebarProps {
  className?: string;
}

const Sidebar: React.FC<sidebarProps> = ({ className }) => {
  return (
    <aside
      className={`bg-gray-800 p-4 text-white ${className} hidden md:block`}
    >
      <div className="flex flex-col space-y-4">
        <Link to="/usestate">UseState</Link>
        <Link to="/useeffect">UseEffect</Link>
        <Link to="/usecontext">UseContext</Link>
      </div>
    </aside>
  );
};

export default Sidebar;
