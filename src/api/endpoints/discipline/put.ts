import axios from 'axios';
import { URLAPI } from '../index';

interface DTODisciplina {
    id: string;
    nome: string;
}

export async function putDisciplinas(disciplinaData: DTODisciplina) {

    try {
        const response = await axios.put(`${URLAPI}disciplinas/${disciplinaData.id}`, disciplinaData);
        return response.data;
    } catch (error) {
        console.error('Error updating discipline:', error);
        throw error;
    }
}