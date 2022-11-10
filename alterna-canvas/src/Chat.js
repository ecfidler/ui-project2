// import { ReactNode } from "react";
import Draggable from "react-draggable";
import {useRef, useState} from 'react';


function Chat() {
    const inputRef = useRef(null);
    const mainBody = useRef(null);

    let chatData = [{user:"Etan", avatar:null, content:"Piss", file:null}, {user:"Me", avatar:null, content:"Poor", file:null}];

    const [data, setData] = useState(chatData);

    const clickPress = (event) => {
        if (event.key === "Enter") {
            updateChatWindow();
        }
    }

    const updateChatWindow = () => {
        let tempText = inputRef.current.value;
        let tmp = chatData.concat([{user:"Me", avatar:null, content:tempText, file:null}]);

        setData(tmp);

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

                <div style={{ padding: "5px", overflowY:"auto"}} ref={mainBody}>
                    {
                        chatData.map((data, index) => {
                            return (
                                <p key={index}>{data.content}</p>
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
