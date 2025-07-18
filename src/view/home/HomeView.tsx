import Introduction from "./sections/Introduction";
import Marketing from "./sections/Marketing";

function HomeView() {
    return (
        <div className="min-h-screen">
            <Introduction />
            <Marketing />
        </div>
    );
}

export default HomeView;