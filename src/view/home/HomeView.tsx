import Introduction from "./sections/Introduction";
import Marketing from "./sections/Marketing";
import Slider from "./sections/slider";

function HomeView() {
    return (
        <div className="min-h-screen">
            <Introduction />
            <Marketing />
            <Slider />
        </div>
    );
}

export default HomeView;