import axios from 'axios';
import { URLAPI, tokenHeaders } from '../index';

interface DTOMatriculas {
    alunoId: number,
    turmaId: number
}

export async function postMatricula(matriclulaData: DTOMatriculas) {

    const data = tokenHeaders();

    const { token } = data;


    try {
        const response = await axios.post(
            `${URLAPI}matriculas`,
            matriclulaData,
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            }
        );
        return response.data;
    } catch (error) {
        console.error('Erro ao registrar Matricula:', error);
        throw error;
    }
}