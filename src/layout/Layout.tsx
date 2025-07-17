import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import Loading from "../components/common/Loading";

const Layout = () => {
  return (
    <div className="min-h-screen bg-background text-foreground dark">
      <Suspense fallback={<Loading />}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default Layout;
