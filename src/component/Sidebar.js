import React from "react";
import { Link, useLocation } from "react-router-dom";

const Sidebar = () => {
  const location = useLocation();
  
  const links = [
    { path: "/", label: "Dashboard" },
    { path: "/users", label: "Users" },
    { path: "/roles", label: "Roles" },
    { path: "/permissions", label: "Permissions" },
  ];

  return (
    <div className="w-64 bg-gray-300 text-black h-screen p-4">
      <h1 className="text-2xl mb-6">RBAC Dashboard</h1>
      <ul>
        {links.map((link) => (
          <li key={link.path} className="mb-4">
            <Link
              to={link.path}
              className={`block py-2 px-4 rounded ${
                location.pathname === link.path
                  ? "bg-green-600 text-black font-bold" // Active link styling
                  : "hover:bg-gray-500"
              }`}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;

