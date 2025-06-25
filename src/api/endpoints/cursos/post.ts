import axios from 'axios';
import { URLAPI } from '../index';
import { validateCursoData } from './validate';


interface DTOCurso {
    nome: string;
}

export async function postCurso(cursoData: DTOCurso) {

    const responseValidateCurso = await validateCursoData(cursoData);

    if (!responseValidateCurso)
        return;

    try {
        const response = await axios.post(`${URLAPI}cursos`, cursoData);
        return response.data;
    } catch (error) {
        console.error('Erro ao registrar curso:', error);
        throw error;
    }
}