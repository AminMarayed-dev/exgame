import { Outlet } from "react-router-dom"; // This renders the nested route content
import Header from "./Header";


function MainLayout() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow w-full pt-16 md:pt-20">
        {/* <div className="container mx-auto"> */}
        <Outlet />
        {/* </div> */}
      </main>
    </div>
  );
}

export default MainLayout;
