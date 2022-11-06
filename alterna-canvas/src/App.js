import "./App.css";
import ClassInfo from "./classInfo";
import Chat from "./Chat";
import Stack from "@mui/material/Stack";

function App() {
    return (
        <div className="App">
            <h1
                className="uc-red"
                style={{ fontWeight: "700", color: "red", textAlign: "center" }}
            >
                Your class List
            </h1>
            <Stack direction="row" spacing={2}>
                <ClassInfo classLink="/class/one" />
                <ClassInfo classLink="/class/two" />
                <ClassInfo classLink="/class/three" />
            </Stack>

            <Chat />
        </div>
    );
}

export default App;
