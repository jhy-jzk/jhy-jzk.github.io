import { Outlet } from "react-router-dom";
import NavigationBar from "../components/NavigationBar";

function SharedLayout() {
    return (
        <>
            <NavigationBar />
            <Outlet />
        </>
    );
}

export default SharedLayout;