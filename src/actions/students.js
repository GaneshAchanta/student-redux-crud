import StudentService from "../services/StudentService";
import { CREATE_STUDENT, DELETE_ALL_STUDENTS, DELETE_STUDENT, RETRIEVE_STUDENTS, UPDATE_STUDENT } from "./type";

export const createStudent = (name,course) => async (dispatch) => {
    try{
        const res = await StudentService.create({name,course});
        
        dispatch ({
            type : CREATE_STUDENT,
            payload : res.data
        });
        return Promise.resolve(res.data);
    }
    catch(err) {
        return Promise.reject(err);
    }
}

export const retrieveStudents = () => async(dispatch) => {
    try{
        const res = await StudentService.getAll();

        dispatch({
            type : RETRIEVE_STUDENTS,
            payload : res.data
        });
    }
    catch(err){
        console.log(err);
    }
}

export const updateStudent = (id,data) => async(dispatch) => {
    try{
        const res = await StudentService.update(id,data);

        dispatch({
            type : UPDATE_STUDENT,
            payload : data
        });
        return Promise.resolve(res.data);
    }
    catch(err){
        return Promise.reject(err);
    }
}

export const deleteStudent = (id) => async(dispatch) => {
    try{
        await StudentService.remove(id);

        dispatch({
            type : DELETE_STUDENT,
            payload : {id}
        });
    }
    catch(err){
        console.log(err);
    }
}

export const deleteAllStudents = () => async(dispatch) => {
    try{
        const res = await StudentService.removeAll();

        dispatch({
            type : DELETE_ALL_STUDENTS,
            payload : res.data
        });
        return Promise.resolve(res.data);
    }
    catch(err){
        return Promise.reject(err);
    }
}
