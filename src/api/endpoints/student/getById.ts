import axios from 'axios';
import { URLAPI, tokenHeaders } from '../index';

export async function getStudentById(id: number) {

    const data = tokenHeaders();

    const { token } = data

    try {
        const response = await axios.get(
                                            `${URLAPI}alunos/${id}`,
                                            {
                                                headers: {
                                                    Authorization: `Bearer ${token}`,
                                                },
                                            }
                                        );
        if (!response.data) {
            throw new Error('Nenhum aluno encontrado');
        }
       
        return response.data;
    } catch (error) {
        console.error('Erro ao buscar alunos:', error);
        throw error;
    }
}