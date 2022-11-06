// import { ReactNode } from "react";
import Draggable from "react-draggable";

function Chat() {
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
                }}
            >
                <div
                    id="handle"
                    style={{
                        width: "100%",
                        height: "50px",
                        backgroundColor: "red",
                        color: "white",
                        textAlign: "left",
                        borderRadius: "5px",
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

                <div style={{ padding: "5px" }}>Main body</div>
                <div
                    style={{
                        width: "100%",
                        height: "50px",
                        backgroundColor: "silver",
                        color: "white",
                        textAlign: "left",
                        borderRadius: "5px",
                        position: "absolute",
                        bottom: "0",
                    }}
                >
                    <button style={{ float: "left-middle" }}>+</button>
                    <button style={{ float: "right-middle" }}>-></button>
                </div>
            </div>
        </Draggable>
    );
}

export default Chat;
