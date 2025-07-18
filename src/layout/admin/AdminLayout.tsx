import React from "react";
import { Outlet } from "react-router-dom";

const AdminLayout: React.FC = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4">
        <Outlet />
      </div>
    </div>
  );
};

export default AdminLayout;
