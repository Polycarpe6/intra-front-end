import axios from 'axios';
import { URLAPI } from '../index';

interface DTOCurso {
    nome: string;
}

export async function postCurso(cursoData: DTOCurso) {

    if (!cursoData.nome.trim()) {
        throw new Error('Dados do curso inválido: nome é obrigatório');
    }

    try {
        const response = await axios.post(`${URLAPI}cursos`, cursoData);
        return response.data;
    } catch (error) {
        console.error('Erro ao registrar curso:', error);
        throw error;
    }
}