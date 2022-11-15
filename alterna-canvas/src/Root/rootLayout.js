import { Typography } from "@mui/material";
import { Outlet } from "react-router-dom";
import RootFooter from "./rootFooter";
// import Chat from "../Chat";

function RootLayout() {
    return (
        <>
            <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', backgroundColor: '#e00122', color: 'white'}}>
                <img src="UCicon.png" alt="UC logo" width="60" height="60" style={{justifyContent:"flex-start"}} />
                <h1 style={{fontSize: '40px'}}>
                    Alterna-Canvas
                </h1>
            </div>
            <Outlet />
            <RootFooter />
        </>
    );
}

export default RootLayout;
