import axios from 'axios';


export const getBlog = async () => {
    return await axios.get('/api/1.0/');
}
export const postBlog = async (body) => {
    return await axios.post('/api/1.0/',body);
}
export const deleteBlog = async (id) => {
    return await axios.delete('/api/1.0/'+id);
}