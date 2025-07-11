import axios from 'axios';
import { tokenHeaders, URLAPI } from '../index';

export async function getMatriculas() {
    
    const data = tokenHeaders();

    const { token } = data

    try {
        const response = await axios.get(`${URLAPI}matriculas`, {
            headers: {
                Authorization: `Bearer ${token}`
            },
        });
        return response.data;
    } catch (error) {
        console.error('Error fetching matriculas:', error);
        throw error;
    }
}