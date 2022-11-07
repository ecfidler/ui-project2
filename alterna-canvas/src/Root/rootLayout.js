import { Outlet } from "react-router-dom";

function RootLayout() {
    return (
        <>
            <header>This is the Header! (it's just a placeholder)</header>
            <Outlet />
            <footer>
                This is the page footer (it's also just a placeholder)
            </footer>
        </>
    );
}

export default RootLayout;
