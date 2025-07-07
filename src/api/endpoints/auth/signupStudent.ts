import axios from 'axios';
import { URLAPI } from '../index';


interface DTOStudentSignup {
    email: string;
    password: string;
    role: string;
}

export async function signupStudent(alunoData: DTOStudentSignup) {

    try {
        const response = await axios.post(`${URLAPI}auth/register`, alunoData);

        if (!response.data) 
            throw new Error('Nenhum aluno registrado');

        return response.data;

    } catch (error) {

        console.error('Erro ao registrar aluno:', error);
        throw error;
    }
}