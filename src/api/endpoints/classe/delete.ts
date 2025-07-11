import axios from 'axios';
import { tokenHeaders, URLAPI } from '../index';


export async function deleteClasse(id: number) {

    const data = tokenHeaders();

    const { token } = data;

    try {
        const response = await axios.delete(
            `${URLAPI}turmas/${id}`,
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            }
        );
        return response.data;
    } catch (error) {
        console.error('Houve um erro ao remover a turma!', error);
        throw error;
    }

}