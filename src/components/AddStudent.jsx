import { useState } from "react"
import { useDispatch } from "react-redux";
import { createStudent } from "../actions/students";

const AddStudent = () => {
    const initialStudentState = {
        id : null,
        name : "",
        course : "",
        status : false
    }
    const [student,setStudent] = useState(initialStudentState);
    const [submitted,setSubmitted] = useState(false);

    const dispatch = useDispatch();

    const handleInputChange = event => {
        const {name,value} = event.target;
        setStudent({...student,[name]:value});
    }

    const saveStudent = () => {
        const {name, course} = student;
        dispatch(createStudent(name,course))
        .then(data => {
            setStudent({
                id : data.id,
                name : data.name,
                course : data.course,
                status : data.status
            });
            setSubmitted(true);
            console.log(data);
        })
        .catch(e => console.log(e));
    }

    const newStudent = () => {
        setStudent(initialStudentState);
        setSubmitted(false);
    }
    return(
        <div>
            <h3>Add Student Component</h3>
            <div className="row">
                <div className="col">

                </div>
                <div className="col">
                    <div className="submit-form">
                        {submitted ? (
                            <div>
                                <h4>Submitted Successfully!</h4>
                                <button className="btn btn-primary" onClick={newStudent}>Add</button>
                            </div>
                        ) : (
                            <div>
                                <div className="form-group">
                                    <label htmlFor="name">Name</label>
                                    <input type="text"
                                    className="form-control"
                                    required
                                    value={student.name}
                                    onChange={handleInputChange}
                                    name="name" id="name"/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="course">Course</label>
                                    <input type="text"
                                    className="form-control"
                                    required
                                    value={student.course}
                                    onChange={handleInputChange}
                                    name="course" id="course"/>
                                </div>
                                <button onClick={saveStudent} className="btn btn-success">
                                    Submit
                                </button>
                            </div>
                        )}
                    </div>
                </div>
                <div className="col">

                </div>
            </div>
        </div>
    )
}

export default AddStudent;