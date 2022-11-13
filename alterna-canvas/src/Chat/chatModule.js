
import { maxHeight } from '@mui/system';
import {useRef, useState} from 'react';
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

import PostAddIcon from '@mui/icons-material/PostAdd';
import SendIcon from '@mui/icons-material/Send';


function ChatModule({data}) {

    const [chatData, setData] = useState(data);

    const inputRef = useRef(null);
    const mainBody = useRef(null);
    const bottom = useRef(null);


    const clickPress = (event) => {
        if (event.key === "Enter") {
            updateChatWindow();
        }
    }

    const updateChatWindow = () => {
        let tempText = inputRef.current.value;
        console.log(inputRef.current.value)
        if (tempText != "") {

            let msg = {user:"Me", avatar:null, content:tempText, file:null};
            setData([...chatData, msg]);

            console.log(tempText);
            inputRef.current.value = ""; // reset text field
            // console.log(chatData)
            // bottom.current.scrollIntoView();
        }
    }



    return (
        <div style={{height:"100%"}}>
            <div style={{overflowY:"auto", maxHeight:"84%"}}>
                <div style={{ padding: "5px", display: "flex", flexDirection: "column", alignItems:"flex-start", maxHeight:"90%"}} ref={mainBody}>
                    {
                        chatData.map((data, index) => {
                            let wordStyle = {backgroundColor:"silver", borderRadius:"10px", marginBottom: "4px", maxWidth:"100%"}
                            if (data.user == "Me") {
                                wordStyle.alignSelf = "flex-end"
                            }
                            return (
                                <div style={wordStyle} key={index} >
                                    <p style={{fontSize:"15px", color:"grey", margin:"5px 10px 5px 10px", wordBreak:"break-all", overflowWrap:"break-word"}}>{data.user}</p>
                                    <p style={{margin:"0px 10px 10px 10px"}}>{data.content}</p>
                                </div>
                            )
                        })
                        
                        // console.log(chatData.at(-1))//.scrollIntoView()
                    }
                    <span style={{height:"0px"}} ref={bottom}></span>
                </div>
            </div>
            <div
                style={{
                    width: "100%",
                    // height: "10%",
                    height:"50px",
                    // minHeight:"20px",
                    backgroundColor: "silver",
                    color: "white",
                    textAlign: "left",
                    borderRadius: "2px",
                    position: "absolute",
                    bottom: "0",
                }}
            >
                
                {/* <button style={{ float: "left-middle" }}>+</button> */}
                <Button
                    variant="contained"
                    size="large"
                    // onClick={hideMove}
                    // startIcon={}
                    style={{backgroundColor:"grey", float:"left-middle", margin:"5px"}}
                    >
                        <PostAddIcon />
                </Button>
                {/* <input type="file" name="input-file" style={{ float: "left-middle" }}>+</input> */}
                <input type="text" name="input-text" placeholder="Text" onKeyPress={(event) => clickPress(event)} ref={inputRef} style={{width:"55%", display:"inline"}}></input>
                {/* <button style={{ float: "right-middle" }} onClick={event => updateChatWindow()}>-></button> */}
                
                {/* <TextField 
                    id="outlined-basic" 
                    variant="outlined" 
                    size='small' 
                    sx={{margin:"6px"}} 
                    ref={inputRef} 
                    placeholder="Text" 
                    onKeyPress={(event) => clickPress(event)}
                    // value={words}
                    // onChange={handleStuff}
                /> */}
                <Button
                    variant="contained"
                    size="large"
                    onClick={updateChatWindow}
                    // startIcon={}
                    style={{backgroundColor:"grey", float:"right-middle", margin:"5px"}}
                    >
                        <SendIcon />
                </Button>
            </div>
        </div>
            
    );
}

export default ChatModule;
