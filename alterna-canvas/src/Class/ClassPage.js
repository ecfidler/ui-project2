import { useParams } from "react-router-dom";
import data from "../metadata/unified.json";

function ClassPage() {
    const { name } = useParams();
    const classData = data[name];
    return (
        <div className="class-page">
            <h1>Class page: {name}</h1>
            {classData.map((item, i) => {
                return (
                    item.type === "assignment" && (
                        <tr key={i}>
                            <td>{item.title}</td>
                            <td>Due: {item.end_or_due}</td>
                        </tr>
                    )
                );
            })}
        </div>
    );
}

export default ClassPage;
