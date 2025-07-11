import axios from 'axios';
import { URLAPI, tokenHeaders } from '../index';
import { TurmaDetalhada } from '../../../context';



export async function getClasseById(id: number) {

    const data = tokenHeaders();

    const { token } = data;

    try {
        const response = await axios.get<TurmaDetalhada>(
            `${URLAPI}turmas/${id}`,
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            }
        );
        return response.data;
    } catch (error) {
        console.error('Houve um erro ao buscar turma:', error);
        throw error;
    }
}