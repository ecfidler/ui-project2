// import { ReactNode } from "react";
import Draggable from "react-draggable";
import {useRef, useState} from 'react';
import ChatModule from './chatModule';


function ChatMoveable() {

    let data = [{user:"Etan", avatar:null, content:"Hellow, worlds", file:null}, {user:"Me", avatar:null, content:"This sorta wor...", file:null}];
    
    return (
        <Draggable handle="#handle">
            <div
                className="box"
                style={{
                    border: "2px solid black",
                    width: "400px",
                    height: "600px",
                    borderRadius: "5px",
                    backgroundColor: "white",
                    resize: "both",
                    overflow: "auto",
                    minHeight:"300px",
                    minWidth:"200px",
                }}
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
                    <button style={{ float: "right" }}>X</button>
                </div>
                
                <ChatModule chatData={data}/>

            </div>
        </Draggable>
    );
}

export default ChatMoveable;
