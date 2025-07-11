import axios from 'axios';
import { URLAPI } from '../index';

export async function deleteTrimestre(id: number) {

    const data = tokenHeaders();

    const { token } = data

    try {
        const response = await axios.delete(
                                                `${URLAPI}trimestres/${id}`,
                                                {
                                                    headers: {
                                                        Authorization: `Bearer ${token}`,
                                                    },
                                                }
                                            );
        return response.data;
    } catch (error) {
        console.error('Houve um erro ao deletar este trimestre:', error);
        throw error;
    }
}