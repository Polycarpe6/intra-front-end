import axios from 'axios';
import { URLAPI, tokenHeaders } from '../index';
import { validateClasse } from './validate';

interface DTOTurma {
   
    nome: string;
    ano: number;
    cursoId: number;

}

export async function postClasse(turmaData: DTOTurma) {
    const responseValidateClasse = await validateClasse({
        nome: turmaData.nome,
        ano: turmaData.ano,
        cursoId: turmaData.cursoId
    });

    if (!responseValidateClasse) 
        return;

    const data = tokenHeaders();

    const { token } = data;

    try {
        
        const response = await axios.post(
            `${URLAPI}turmas`, 
            turmaData,
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            }
        );

        return response.data;
    } catch (error) {
        console.error('Error creating turma:', error);
        throw error;
    }
}
