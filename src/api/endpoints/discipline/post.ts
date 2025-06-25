import axios from 'axios';
import { URLAPI } from '../index';
import { validateDiscipline } from './validate';

interface DTODisciplina {
    nome: string;
}

export async function postDisciplinas(disciplinaData: DTODisciplina) {

    const responseValidation = await validateDiscipline(disciplinaData);

    if (!responseValidation)
        return;

    try {
        const response = await axios.post(`${URLAPI}disciplinas`, disciplinaData);
        return response.data;
    } catch (error) {
        console.error('Erro ao registrar disciplina:', error);
        throw error;
    }
}