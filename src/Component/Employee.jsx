export default function Employee({ index, name, position, salary, status }) {
    return (
      <>
        <td>{index}</td>
        <td>{name}</td>
        <td>{position}</td>
        {status === "Active" ? <td>{salary}</td> : <td></td>}
        <td>{status}</td>
      </>
    );
  }