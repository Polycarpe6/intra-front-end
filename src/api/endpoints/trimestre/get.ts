import axios from 'axios';
import { URLAPI, tokenHeaders } from '../index';

export async function getTrimestres() {

    const data = tokenHeaders();

    const { token } = data

    try {
        const response = await axios.get(`${URLAPI}trimestres`, {
            headers: {
                Authorization: `Bearer ${token}`
            },
        });
        return response.data;
    } catch (error) {
        console.error('Houve um erro ao buscar os trimestres:', error);
        throw error;
    }
}