import axios from 'axios';
import { tokenHeaders, URLAPI } from '../index';
import { validateDiscipline } from './validate';

interface DTODisciplina {
    id: string;
    nome: string;
}

export async function putDisciplinas(disciplinaData: DTODisciplina) {

    const responseValidation = await validateDiscipline(disciplinaData);
    
    if (!responseValidation)
        return;

    const data = tokenHeaders();

    const { token } = data;

    try {
        const response = await axios.put(
                                            `${URLAPI}disciplinas/${disciplinaData.id}`, 
                                            disciplinaData,
                                            {
                                                headers: {
                                                    Authorization: `Bearer ${token}`,
                                                },
                                            }
                                        
                                        );
        return response.data;
    } catch (error) {
        console.error('Error updating discipline:', error);
        throw error;
    }
}