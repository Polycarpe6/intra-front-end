import axios from 'axios';
import { URLAPI, tokenHeaders } from '../index';

export async function getDiscipline() {

    const data = tokenHeaders();

    const { token } = data

    try {
        const response = await axios.get(`${URLAPI}disciplinas`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });

        if (response)
            return response.data;

    } catch (error) {
        // console.error('Erro ao buscar disciplinas:', error);
        throw error;
    }
}
