import { Outlet } from "react-router-dom";
import RootFooter from "./rootFooter";

function RootLayout() {
    return (
        <>
            <header>This is the Header! (it's just a placeholder)</header>
            <Outlet />
            <RootFooter />
        </>
    );
}

export default RootLayout;
