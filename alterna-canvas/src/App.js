import "./App.css";
import ClassInfo from "./classInfo";
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
                <ClassInfo classLink="/class/ui" className={"ui"} />
                <ClassInfo
                    classLink="/class/senior-design"
                    className={"senior_design"}
                />
                <ClassInfo
                    classLink="/class/computer-graphics"
                    className={"computer_graphics"}
                />
            </Stack>
        </div>
    );
}

export default App;
