/* TODO
style the table / change it to collapsable table
load in the actual data there
*/

export default function AssignmentsTab({ data }) {
    const assignments = data.filter((item) => item.type === "assignment");

    return (
        <>
            {assignments.map((item, i) => {
                return (
                    <tr key={i}>
                        <td>{item.title}</td>
                        <td>Due: {item.end_or_due}</td>
                    </tr>
                );
            })}
        </>
    );
}
