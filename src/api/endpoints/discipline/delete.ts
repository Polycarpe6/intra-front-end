import axios from 'axios';
import { URLAPI } from '../index';

export async function deleteDisciplinas(id: string) {
    try {
        const response = await axios.delete(`${URLAPI}disciplinas/${id}`);
        return response.data;
    } catch (error) {
        console.error('Error deleting discipline:', error);
        throw error;
    }
}