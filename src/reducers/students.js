import { CREATE_STUDENT, DELETE_ALL_STUDENTS, DELETE_STUDENT, RETRIEVE_STUDENTS, UPDATE_STUDENT } from "../actions/type";

const initialState = [];

const studentReducer = (students = initialState,action) => {
    const {type,payload} = action;

    switch(type) {
        case CREATE_STUDENT : return[...students,payload];
        case RETRIEVE_STUDENTS : return payload;
        case UPDATE_STUDENT : return students.map(student => {
            if(student.id === payload.id){
                return{
                    ...student,
                    payload
                }
            }
            else{
                return student;
            }
        });
        case DELETE_STUDENT : return students.filter(({id})=> id !== payload.id);
        case DELETE_ALL_STUDENTS : return[];
        default : return students;
    }
};

export default studentReducer;