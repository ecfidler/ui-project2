import { Outlet } from "react-router-dom";

function RootLayout() {
    return (
        <>
            <header>This is the Header! (it's just a placeholder)</header>
            <Outlet />
        </>
    );
}

export default RootLayout;
