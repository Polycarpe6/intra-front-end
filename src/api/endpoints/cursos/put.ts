import axios from 'axios';
import { URLAPI, tokenHeaders } from '../index';
import { validateCursoData } from './validate';

interface DTOCurso {
    id: number;
    nome: string;
}

export async function putCurso(cursoData: DTOCurso) {
    const responseValidateCurso = await validateCursoData(cursoData);

    if (!responseValidateCurso) return;

    const data = tokenHeaders();

    const { token } = data;

    try {
        const response = await axios.put(`${URLAPI}cursos/${cursoData.id}`, cursoData, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        return response.data;
    } catch (error) {
        alert('Houve um erro ao atualizar o curso.');
        throw error;
    }
}
