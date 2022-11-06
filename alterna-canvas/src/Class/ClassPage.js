import { useParams } from "react-router-dom";

function ClassPage() {
    const { name } = useParams();
    return (
        <div className="class-page">
            <h1>Class page: {name}</h1>
        </div>
    );
}

export default ClassPage;
