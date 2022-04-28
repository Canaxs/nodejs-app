import axios from 'axios';


export const getBlog = () => {
    return axios.get('/api/1.0/');
}