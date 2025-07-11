import axios from 'axios';
import { tokenHeaders, URLAPI } from '../index';

interface DTOProTeacher {
    biNumber: string;
    email: string;
    url: string;
}

export async function postTeacher(teacherData: DTOProTeacher) {
    if (!teacherData || !teacherData.biNumber || !teacherData.email) {
        throw new Error('Dados do professor inválidos: Numero do BI e email são obrigatórios');
    }   

    const data = tokenHeaders();
            
    const { token } = data;

    try {
        const response = await axios.post(
                                        `${URLAPI}professores`, 
                                        teacherData,
                                        {
                                            headers: {
                                                Authorization: `Bearer ${token}`,
                                            },
                                        }
                                    );
        
        if (!response.data) {
            throw new Error('Nenhum professor criado');
        }
        return response.data;
    } catch (error) {
        console.error('Erro ao criar professor:', error);
        throw error;
    }
}