import axios from 'axios';
import { URLAPI, tokenHeaders } from '../index';

interface DTOClassDiscipline {
    turma_id: number,
    disciplina_id: number,
    professor_id: number
}

export async function postClassDiscipline(classDisciplineData: DTOClassDiscipline) {

    const data = tokenHeaders();

    const { token } = data;

    try {
        const response = await axios.post(
            `${URLAPI}turma-disciplinas`,
            classDisciplineData,
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            }
        );
        
        return response.data;
    } catch (error) {
        console.error('Erro ao registrar turma-disciplina:', error);
        throw error;
    }
}