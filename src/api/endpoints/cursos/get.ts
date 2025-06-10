import axios from 'axios';
import { URLAPI } from '../index';

export async function getCursos() {
    try {
        const response = await axios.get(`${URLAPI}cursos`);
        return response.data;
    } catch (error) {
        console.error('Error fetching cursos:', error);
        throw error;
    }
}