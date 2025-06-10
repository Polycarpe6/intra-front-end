import axios from 'axios';
import { URLAPI } from '../index';

export async function getStudent() {
    try {
        const response = await axios.get(`${URLAPI}alunos`);
        if (!response.data) {
            throw new Error('Nenhum aluno encontrado');
        }
        if (!Array.isArray(response.data)) {
            throw new Error('Resposta inválida: esperado um array de alunos');                      
        }
        if (response.data.length === 0) {
            throw new Error('Nenhum aluno encontrado');
        }
        return response.data;
    } catch (error) {
        console.error('Erro ao buscar alunos:', error);
        throw error;
    }
}