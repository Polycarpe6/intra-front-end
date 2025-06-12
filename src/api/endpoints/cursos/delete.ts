import axios from 'axios';
import { URLAPI } from '../index';

export async function deleteCurso(id: string) {
    try {
        const response = await axios.delete(`${URLAPI}cursos/${id}`);
        return response.data;
    } catch (error) {
        console.error('Error deleting curso:', error);
        throw error;
    }
}