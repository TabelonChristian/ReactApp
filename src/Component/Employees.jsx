import Employee from './Employee';

export default function Employees() {
  const employees = [
    { name: "Ian Tarega", position: "Developer", salary: "$6000", status: "Active" },
    { name: "Darren Reales", position: "Developer", salary: "$7500", status: "Active" },
    { name: "Ryzo Ngalis", position: "Developer", salary: "$5000", status: "Active" },
    { name: "Jeffrey Toquero", position: "Designer", salary: "$5000", status: "Not Active" },
    { name: "Christian Tabelon", position: "Manager", salary: "$6000", status: "Active" },
    { name: "Miafe Coraza", position: "Manager", salary: "$5000", status: "Active" },
    { name: "Rylen Pocong", position: "Manager", salary: "$5000", status: "Active" },
    { name: "Hariell Salmeron", position: "Developer", salary: "$6000", status: "Not Active" },
    { name: "Hardeil Salmeron", position: "Developer", salary: "$5500", status: "Active" },
    { name: "Harfeil Salmeron", position: "Developer", salary: "$6500", status: "Active" }
  ];

  return (
    <div>
      <h1>Employees Details:</h1>
      <table border="1">
        <thead>
          <tr>
            <th>No.</th>
            <th>Employee Name</th>
            <th>Position</th>
            <th>Salary</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee, index) => (
            <tr key={index}>
              <Employee
                index={index + 1}
                name={employee.name}
                position={employee.position}
                salary={employee.salary}
                status={employee.status}
              />
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
