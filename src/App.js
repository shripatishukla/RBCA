import React from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Users from "./pages/User";
import Roles from "./pages/Roles";
import PermissionManagement from "./pages/Permissions";
import NotFound from "./pages/NotFound";
import Sidebar from "./component/Sidebar";

function App() {

  console.log("app page");

  return (
    <div className="flex bg-stone-950 text-white">
      <Sidebar />
      <div className="flex-1 p-4">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/users" element={<Users />} />
          <Route path="/roles" element={<Roles />} />
          <Route path="/permissions" element={<PermissionManagement />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
