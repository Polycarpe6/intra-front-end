import axios from 'axios';
import { URLAPI } from '../index';
import { validateDiscipline } from './validate';

interface DTODisciplina {
    id: string;
    nome: string;
}

export async function putDisciplinas(disciplinaData: DTODisciplina) {

    const responseValidation = await validateDiscipline(disciplinaData);
    
    if (!responseValidation)
        return;

    try {
        const response = await axios.put(`${URLAPI}disciplinas/${disciplinaData.id}`, disciplinaData);
        return response.data;
    } catch (error) {
        console.error('Error updating discipline:', error);
        throw error;
    }
}