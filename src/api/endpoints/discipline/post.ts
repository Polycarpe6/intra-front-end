import axios from 'axios';
import { URLAPI } from '../index';

interface DTODisciplina {
    nome: string;
}

export async function postDisciplinas(disciplinaData: DTODisciplina) {

    if (!disciplinaData || !disciplinaData.nome) {
        throw new Error('Dados da disciplina inválidos: nome é obrigatório');
    }

    try {
        const response = await axios.post(`${URLAPI}disciplinas`, disciplinaData);
        return response.data;
    } catch (error) {
        console.error('Erro ao registrar disciplina:', error);
        throw error;
    }
}