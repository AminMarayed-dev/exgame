import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import Loading from "../components/common/Loading";
import Header from "./main/Header";

const Layout = () => {
  return (
    <div className="min-h-screen bg-background text-foreground dark">
      <Suspense fallback={<Loading />}>
        <Header />
        <Outlet />
      </Suspense>
    </div>
  );
};

export default Layout;
