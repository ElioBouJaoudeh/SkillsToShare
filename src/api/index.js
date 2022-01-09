import axios from 'axios';
const API=axios.create({baseURL:'http://localhost:5000'});



export const fetchNotes = () => API.get('/notes');
export const createNote = (newNote) => API.post('/notes', newNote);
//export const updateNote = (id, updatedNote) => axios.patch(`${url}/${id}`, updatedNote);
//export const deleteNote = (id) => axios.delete(`${url}/${id}`);
export const signIn = (formData) => API.post('/user/signin',formData);
export const signUp = (formData) => API.post('/user/signup',formData);
