import React, { useState } from 'react'
import { Table } from 'react-bootstrap';

const UseState = () => {
    const [students, setStudents] = useState([]);

    const addStudent = () => {

        const id = parseInt(window.prompt('Enter the id of student'));
        const name = window.prompt('Enter the name of student');
        const city = window.prompt('Enter the city of student');


        setStudents([...students, { id, name, city }])
    }
    const delStud = (it) => {
        // const it = it;

        let remStuds = [...students].splice(it, 1)
        setStudents(remStuds)
        // console.log(students);
    }

    return (
        <>
            <div className="container">
            <button onClick={addStudent} className='btn btn-info'>Add Student</button>
                <Table striped bordered hover>
                    
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>City</th>
                            <th>Action</th>
                        </tr>
                    </thead>
</Table>
                    {
                        students.map((val, i) => {
                            return (
                                <ol>
                                    <li key={i}>
                                        <p>{val.id}&nbsp;
                                        {val.name}&nbsp;
                                        {val.city}</p>
                                        <button type='submit' className='btn btn-secondary' onClick={() => delStud(i)}>Delete</button>
                                        
                                    </li>
                                </ol>
                            );
                        })
                    }
                
            </div>

        </>
    )
}

export default UseState