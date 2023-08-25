import http from '../http-common';

const getAll = () => http.get("/students");

const get = id => http.get(`/students/${id}`);

const create = data => http.post('/students',data);

const update = (id,data) => http.put(`/students/${id}`,data);

const remove = id => http.delete(`/students/${id}`);

const removeAll = () => http.delete('/students');

const StudentService = {
    getAll,
    get,
    create,
    update,
    remove,
    removeAll
};

export default StudentService;