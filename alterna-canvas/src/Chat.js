// import { ReactNode } from "react";
import Draggable from "react-draggable";
import {useRef, useState} from 'react';


function Chat() {
    const inputRef = useRef(null);
    const mainBody = useRef(null);

    const [chatData, setData] = useState([{user:"Etan", avatar:null, content:"Hellow, worlds", file:null}, {user:"Me", avatar:null, content:"This sorta wor...", file:null}]);

    const clickPress = (event) => {
        if (event.key === "Enter") {
            updateChatWindow();
        }
    }

    const updateChatWindow = () => {
        let tempText = inputRef.current.value;

        let msg = {user:"Me", avatar:null, content:tempText, file:null};
        setData([...chatData, msg]);

        console.log(tempText);
        inputRef.current.value = ""; // reset text field
        console.log(chatData)
    }



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

                <div style={{ padding: "5px", overflowY:"auto", display: "flex", flexDirection: "column", alignItems:"flex-start"}} ref={mainBody}>
                    {
                        chatData.map((data, index) => {
                            let wordStyle = {backgroundColor:"silver", borderRadius:"10px", marginBottom: "4px"}
                            if (data.user == "Me") {
                                wordStyle.alignSelf = "flex-end"
                            }
                            return (
                                <div style={wordStyle}>
                                    <p key={index} style={{margin:"10px"}}>{data.content}</p>
                                </div>
                            )
                        })
                    }
                </div>
                <div
                    style={{
                        width: "100%",
                        height: "10%",
                        maxHeight:"50px",
                        minHeight:"20px",
                        backgroundColor: "silver",
                        color: "white",
                        textAlign: "left",
                        borderRadius: "2px",
                        position: "absolute",
                        bottom: "0",
                    }}
                >
                    <button style={{ float: "left-middle" }}>+</button>
                    {/* <input type="file" name="input-file" style={{ float: "left-middle" }}>+</input> */}
                    <input type="text" name="input-text" placeholder="Text" onKeyPress={(event) => clickPress(event)} ref={inputRef}></input>
                    <button style={{ float: "right-middle" }} onClick={event => updateChatWindow()}>-></button>
                </div>
            </div>
        </Draggable>
    );
}

export default Chat;
