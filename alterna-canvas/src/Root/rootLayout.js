import { Typography } from "@mui/material";
import { Outlet } from "react-router-dom";
import RootFooter from "./rootFooter";
// import Chat from "../Chat";

function RootLayout() {
    return (
        <>
            <h1 style={{backgroundColor: '#e00122', color: 'white', marginLeft: 'auto', fontSize: '75px', textAlign: 'center'}}>
                <img src="UCicon.png" alt="UC logo" width="100" height="100" style={{top:"50%"}} />
                Alterna-Canvas
            </h1>
            <Outlet />
            <RootFooter />
        </>
    );
}

export default RootLayout;
