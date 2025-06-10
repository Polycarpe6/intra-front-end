import axios from 'axios';
import { URLAPI } from '../index';

interface DTOProTeacher {
    nome: string;
    email: string;

    // n_BI: '',
    // email: '',
}

export async function postTeacher(teacherData: DTOProTeacher) {
    if (!teacherData || !teacherData.nome || !teacherData.email) {
        throw new Error('Dados do professor inválidos: nome e email são obrigatórios');
    }   

    try {
        const response = await axios.post(`${URLAPI}professores`, teacherData);
        if (!response.data) {
            throw new Error('Nenhum professor criado');
        }
        return response.data;
    } catch (error) {
        console.error('Erro ao criar professor:', error);
        throw error;
    }
}