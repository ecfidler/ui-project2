import { Outlet } from "react-router-dom";
import RootFooter from "./rootFooter";
// import Chat from "../Chat";

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
