import axios from 'axios';
import { URLAPI } from '../index';


export async function getTeacher() {
    try {
        const response = await axios.get(`${URLAPI}professores`);
        return response.data;
    } catch (error) {
        console.error("Erro ao buscar professores:", error);
        return [];
    }
}