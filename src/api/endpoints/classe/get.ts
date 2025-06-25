import axios from 'axios';
import { URLAPI } from '../index';

export async function getClasses() {
    try {
        const response = await axios.get(`${URLAPI}turmas`);
        return response.data;
    } catch (error) {
        console.error('Houve um erro ao buscar turmas:', error);
        throw error;
    }
}