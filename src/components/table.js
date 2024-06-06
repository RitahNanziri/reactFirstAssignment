import React from "react";

class StudentTable extends React.Component {
    render() {
        const students = [
            { name: 'Ritah', age: 20, sex: 'Male', class: '12th Grade' },
            { name: 'Tracy', age: 18, sex: 'Female', class: '11th Grade' },
            { name: 'Hellen', age: 19, sex: 'Male', class: '10th Grade' }
        ];

        return (
            <div className="StudentTable">
                <h1>Student Information</h1>
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Age</th>
                            <th>Sex</th>
                            <th>Class</th>
                        </tr>
                    </thead>
                    <tbody>
                        {students.map((student, index) => (
                            <tr key={index}>
                                <td>{student.name}</td>
                                <td>{student.age}</td>
                                <td>{student.sex}</td>
                                <td>{student.class}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default StudentTable;
