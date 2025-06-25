import axios from 'axios';
import { URLAPI } from '../index';

export async function getClasseById(id: number) {
    try {
        const response = await axios.get(`${URLAPI}turmas/${id}`);
        return response.data;
    } catch (error) {
        console.error('Houve um erro ao buscar turma:', error);
        throw error;
    }
}