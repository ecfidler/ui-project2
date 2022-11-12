// import { ReactNode } from "react";
import Draggable from "react-draggable";
import ChatModule from './chatModule';

import Button from "@mui/material/Button";
import {useRef, useState} from 'react';


function ChatMoveable() {

    let data = [{user:"Etan", avatar:null, content:"Hellow, worlds", file:null}, {user:"Me", avatar:null, content:"This sorta wor...", file:null}];
    
    const moveable = useRef(null);
    const bubble = useRef(null);

    function hideMove() {
        moveable.current.style.display = "none";
        bubble.current.style.display = "block";
    }
    function hideBubble() {
        bubble.current.style.display = "none";
        moveable.current.style.display = "block";
    }


    return (
        <div>
            <Button
            variant="contained"
            size="large"
            onClick={hideBubble}
            // startIcon={<DownloadIcon />}
            ref={bubble}
        >
           Chat
        </Button>
        {/* <div ref={bubble} style={{backgroundColor:"red", color:"white", borderRadius:"10px", width:"100px", float:"left"}} onclick={event => hideBubble()}>Chat</div> */}

        <Draggable handle="#handle" >
            <div
                className="box"
                style={{
                    border: "2px solid black",
                    width: "400px",
                    height: "600px",
                    borderRadius: "5px",
                    backgroundColor: "white",
                    resize: "both",
                    overflow: "hidden",
                    minHeight:"300px",
                    minWidth:"200px",
                    display:"none",
                }}
                ref={moveable}
            >
                <div
                    id="handle"
                    style={{
                        width: "100%",
                        height: "10%",
                        maxHeight:"50px",
                        minHeight:"20px",
                        backgroundColor: "red",
                        color: "white",
                        textAlign: "left",
                        borderRadius: "2px",
                    }}
                >
                    <h1
                        style={{
                            width: "70%",
                            marginTop: "0px",
                            marginLeft: "5px",
                            display: "inline",
                        }}
                    >
                        Mysc words as a title
                    </h1>
                    <button style={{ float: "right" }}  onClick={event => hideMove()}>X</button>
                </div>
                
                <ChatModule data={data}/>

            </div>
        </Draggable>
        </div>
    );
}

export default ChatMoveable;
