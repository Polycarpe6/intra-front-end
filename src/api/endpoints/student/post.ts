import axios from 'axios';
import { URLAPI } from '../index';

interface DTOStudent {
    processNumber: number,
    email: string
}

export async function postStudent(alunoData: DTOStudent) {

    if (!alunoData || !alunoData.processNumber || !alunoData.email) 
        return alert('Dados do aluno inválidos: nome e email são obrigatórios');
    

    try {
        const response = await axios.post(`${URLAPI}alunos`, alunoData);
        if (!response.data) {
            throw new Error('Nenhum aluno criado');
        }
        return response.data;
    } catch (error) {
        console.error('Erro ao criar aluno:', error);
        throw error;
    }

}