import { Outlet } from "react-router-dom"; // This renders the nested route content
import Header from "./Header";
import Footer from "./Footer";
import { ProgressBar, ScrollToTop } from "../../components/common";

function MainLayout() {
  return (
    <div className="flex flex-col min-h-screen">
      <ProgressBar />
      <Header />
      <main className="flex-grow w-full pt-16 md:pt-20">
        {/* <div className="container mx-auto"> */}
        
        <Outlet />
        {/* </div> */}
      </main>
      <ScrollToTop />
      <Footer />
    </div>
  );
}

export default MainLayout;
