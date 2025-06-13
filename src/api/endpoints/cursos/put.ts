import axios from 'axios';
import { URLAPI } from '../index';

interface DTOCurso {
    id: number;
    nome: string;
}

export async function putCurso(cursoData: DTOCurso) {

    try {
        const response = await axios.put(`${URLAPI}cursos/${cursoData.id}`, cursoData);
        return response.data;
    } catch (error) {
        alert('Houve um erro ao atualizar o curso:');
        throw error;
    }
}