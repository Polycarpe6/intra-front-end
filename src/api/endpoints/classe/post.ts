import axios from 'axios';
import { URLAPI } from '../index';

interface DTOTurma {
    nome: string;
    ano: number;
    cursoId: number;
}

export async function postTurma(turmaData: DTOTurma) {
    try {
        const response = await axios.post(`${URLAPI}turmas`, turmaData);
        return response.data;
    } catch (error) {
        console.error('Error creating turma:', error);
        throw error;
    }
}