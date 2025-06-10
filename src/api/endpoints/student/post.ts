import axios from 'axios';
import { URLAPI } from '../index';

interface DTOStudent {
    nome: string;
    email: string;

    // process: '',
    // n_BI: '',
    // email: '',
    // password: ''
}

export async function postStudent(alunoData: DTOStudent) {

    if (!alunoData || !alunoData.nome || !alunoData.email) {
        throw new Error('Dados do aluno inválidos: nome e email são obrigatórios');
    }   

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