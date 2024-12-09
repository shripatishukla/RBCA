import React from "react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <div style={{ padding: "20px" }}>
      <h1 className="text-5xl font-serif">RBAC Dashboard</h1>
      <p className="mt-5 text-xl">Welcome to the Role-Based Access Control system!</p>
      <p className="text-xl">Simplify user management and enhance security with our RBAC solution.</p>
      <nav>
        <ul>
          <li className="text-xl mt-5 text-green-600">
            <Link to="/users">Manage Users</Link>
          </li>
          <li className="text-xl mt-3 text-green-600">
            <Link to="/roles">Manage Roles</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Dashboard;
