import axios from 'axios';
import { URLAPI } from '../index';



export async function getCursos() {

    const token = localStorage.getItem('token');

    try {
        const response = await axios.get(`${URLAPI}cursos`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        return response.data;
    } catch (error) {
        console.error('Error fetching cursos:', error);
        throw error;
    }
}