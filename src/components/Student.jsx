import { useEffect, useState } from "react"
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import StudentService from "../services/StudentService";
import { deleteStudent, updateStudent } from "../actions/students";

const Student = () => {
    const initialStudentState = {
        id : null,
        name : "",
        course : "",
        status : false
    }
    const [currentStudent,setCurrentStudent] = useState(initialStudentState);
    const [message,setMessage] = useState("");

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const{id} = useParams();

    const getStudent = id => {
        console.log(id);
        StudentService.get(id).then(response => {
            setCurrentStudent(response.data);
        })
        .catch(err => console.log(err));
    }

    useEffect(() => {
        getStudent(id);
    },[id]);

    const handleInputChange = event => {
        const{name,value} = event.target;
        setCurrentStudent({...currentStudent,[name]:value});
    }

    const updateStatus = status => {
        const data = {
            id : currentStudent.id,
            name : currentStudent.name,
            course : currentStudent.course,
            status : status
        }
        dispatch(updateStudent(currentStudent.id,data)).then(response => {
            setCurrentStudent({...currentStudent, status : status});
            setMessage("Status was updates successfully");
        })
        .catch(e => console.log(e));
    }

    const updateContent = () => {
        dispatch(updateStudent(currentStudent.id,currentStudent)).then(response => {
            setMessage("The Student was successfully updated");
        })
        .catch(e => console.log(e));
    }

    const removeStudent = () => {
        dispatch(deleteStudent(currentStudent.id)).then(() => {
            navigate('/students');
        })
        .catch(e => console.log(e));
    }

    return (
        <div className="row">
            <h3>Student Component</h3>
            <div className="col">
                {currentStudent ? (
                    <div className="edit-form">
                        <form>
                            <div className="form-group">
                                <label htmlFor="name">Name</label>
                                <input type="text"
                                className="form-control"
                                id="name"
                                name="name"
                                value={currentStudent.name}
                                onChange={handleInputChange}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="name">Course</label>
                                <input type="text"
                                className="form-control"
                                id="course"
                                name="course"
                                value={currentStudent.course}
                                onChange={handleInputChange}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="status">Status</label>
                                {currentStudent.status ? "Active" : "Disabled"}
                            </div>
                        </form>
                        {currentStudent.status ? (
                            <button
                            className="btn btn-secondary"
                            onClick={() => updateStatus(false)}
                            >
                                Disable
                            </button>
                        ) : (
                            <button
                            className="btn btn-secondary"
                            onClick={() => updateStatus(true)}
                            >
                                Activate
                            </button>
                        )}
                        <button className="btn btn-danger"
                        onClick={removeStudent}
                        >
                            Delete
                        </button>
                        <button className="btn btn-success"
                        onClick={updateContent}
                        >
                            Update
                        </button>
                        <p>{message}</p>
                    </div>
                ) : (
                    <div>
                        <p>Please click on the Student...</p>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Student;