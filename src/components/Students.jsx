import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { retrieveStudents } from "../actions/students";

const Students = () => {
    const [currentIndex,setCurrentIndex] = useState(-1);
    const [currentStudent,setCurrentStudent] = useState(null);

    const students = useSelector(state => state.students);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(retrieveStudents());
    },[dispatch]);

    const setActiveStudent = (student, index) =>{
        setCurrentStudent(student);
        setCurrentIndex(index);
    }
    return(
        <div className="row">
            <h1>Students Component</h1>
            <div className="col">
                <h3>
                    Students List
                </h3>
                <ul className="list-group">
                {students && students.map((student,index) => (
                    <li
                    className={"list-group-item " + (index === currentIndex ? "active" : "")}
                    key= {student.id}
                    onClick = {() => setActiveStudent(student,index)}
                    >{student.name}</li>
                    ))}
                </ul>
            </div>
            <div className="col">
            {currentStudent ? (
            <div>
                <h4>Student Details</h4>
                <div>
                    <label htmlFor="name">
                        <strong>Name : </strong>
                    </label>{" "}
                    {currentStudent.name}
                </div>
                <div>
                    <label htmlFor="course">
                        <strong>Course : </strong>
                    </label>{" "}
                    {currentStudent.course}
                </div>
                <div>
                    <label htmlFor="status">
                        <strong>Status : </strong>
                    </label>{" "}
                    {currentStudent.status ? "Active" : "Disabled"}
                </div>
                <Link to = {'/students/'+ currentStudent.id}
                className="btn btn-warning">
                    Edit
                </Link>
            </div>
            ) : (
            <div>
                <p>Please Click on the Student</p>
            </div>
            )}
            </div>
        </div>
    )
}
export default Students;