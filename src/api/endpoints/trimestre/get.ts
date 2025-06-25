import axios from 'axios';
import { URLAPI } from '../index';

export async function getTrimestres() {
    try {
        const response = await axios.get(`${URLAPI}trimestres`);
        return response.data;
    } catch (error) {
        console.error('Houve um erro ao buscar os trimestres:', error);
        throw error;
    }
}