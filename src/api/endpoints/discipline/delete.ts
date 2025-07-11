import axios from 'axios';
import { tokenHeaders, URLAPI } from '../index';

export async function deleteDiscipline(id: number) {

    const data = tokenHeaders();

    const { token } = data;

    try {
        const response = await axios.delete(
                                                `${URLAPI}disciplinas/${id}`,
                                                {
                                                    headers: {
                                                        Authorization: `Bearer ${token}`,
                                                    },
                                                }
                                            );
        return response.data;
    } catch (error) {
        console.error('Error deleting discipline:', error);
        throw error;
    }
}