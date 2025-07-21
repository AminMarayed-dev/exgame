import Introduction from "./sections/Introduction";
import AboutUs from "./sections/AboutUs";
// import LinkDownload from "./sections/LinkDownload";
// import Marketing from "./sections/Marketing";
// import Slider from "./sections/slider";

function HomeView() {
  return (
    <div className="min-h-screen">
      <Introduction />
      <AboutUs />
      {/* <Marketing />
      <Slider /> */}
      {/* <LinkDownload /> */}
    </div>
  );
}

export default HomeView;
