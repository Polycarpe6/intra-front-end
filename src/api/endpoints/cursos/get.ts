import axios from 'axios';
import { tokenHeaders, URLAPI } from '../index';

export async function getCursos() {
    
    const data = tokenHeaders();

    const { token } = data

    try {
        const response = await axios.get(`${URLAPI}cursos`, {
            headers: {
                Authorization: `Bearer ${token}`
            },
        });
        return response.data;
    } catch (error) {
        console.error('Error fetching cursos:', error);
        throw error;
    }
}