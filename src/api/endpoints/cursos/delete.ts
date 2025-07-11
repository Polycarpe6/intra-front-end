import axios from 'axios';
import { URLAPI, tokenHeaders } from '../index';

export async function deleteCurso(id: number) {
    const { token } = tokenHeaders();

    try {
        const response = await axios.delete(`${URLAPI}cursos/${id}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        return response.data;
    } catch (error) {
        console.error('Error deleting curso:', error);
        throw error;
    }
}
