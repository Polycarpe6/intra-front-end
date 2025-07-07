import axios from 'axios';
import { URLAPI } from '../index';


interface DTOStudentComplete {
    biNumber: string;
    email: string;
    processNumber: number | string | undefined
}

export async function completeProfileStudent(alunoData: DTOStudentComplete) {

    if (!alunoData || !alunoData.processNumber || !alunoData.email || !alunoData.processNumber) 
        return alert('Dados do aluno inválidos: nome, email e Numero de processo são obrigatórios');
    

    try {

        const response = await axios.post(`${URLAPI}complete-profile`, alunoData);

        if (!response.data) {
            throw new Error('Nenhum aluno criado');
        }

        return response.data;

    } catch (error) {

        console.error('Erro ao criar aluno:', error);
        throw error;
        
    }

}