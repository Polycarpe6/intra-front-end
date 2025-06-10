import axios from 'axios';
import { URLAPI } from '../index';


export async function getDisciplinas() {
    try {
        const response = await axios.get(`${URLAPI}disciplinas`);
        if (!response.data) {
            throw new Error('Nenhuma disciplina encontrada');
        }
        if (!Array.isArray(response.data)) {
            throw new Error('Resposta inválida: esperado um array de disciplinas');
        }
        if (response.data.length === 0) {
            throw new Error('Nenhuma disciplina encontrada');
        }
        return response.data;
    } catch (error) {
        console.error('Erro ao buscar disciplinas:', error);
        throw error;
    }
}