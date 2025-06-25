import axios from 'axios';
import { URLAPI } from '../index';
import { validateClasse } from './validate';

interface DTOTurma {
    id?: number;
    nome: string;
    ano: number;
    curso_id: number;
}

export async function putClasse(classeData: DTOTurma) {

    const responseValidateClasse = await validateClasse({
        nome: classeData.nome,
        ano: classeData.ano,
        cursoId: classeData.curso_id
    });
    
    if (!responseValidateClasse)
        return;

    try {
        const response = await axios.put(`${URLAPI}turmas/${classeData.id}`, classeData);
        return response.data;
    } catch (error) {
        alert('Houve um erro ao atualizar a turma:');
        throw error;
    }
}