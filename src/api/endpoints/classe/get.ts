import axios from 'axios';
import { URLAPI, tokenHeaders } from '../index';

export async function getClasses() {

    const data = tokenHeaders();

    const { token } = data

    try {
        const response = await axios.get(
                                            `${URLAPI}turmas`,
                                            {
                                                headers: {
                                                    Authorization: `Bearer ${token}`,
                                                },
                                            }
                                        );
        return response.data;
    } catch (error) {
        console.error('Houve um erro ao buscar turmas:', error);
        throw error;
    }
}