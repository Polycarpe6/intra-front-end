import axios from 'axios';
import { tokenHeaders, URLAPI } from '../index';


export async function getTeacher() {

    const data = tokenHeaders();
            
    const { token } = data;

    try {
        const response = await axios.get(
            `${URLAPI}professores`,
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            }
        );
        return response.data;
    } catch (error) {
        console.error("Erro ao buscar professores:", error);
        return [];
    }
}