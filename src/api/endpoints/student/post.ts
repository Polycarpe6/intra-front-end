import axios from 'axios';
import { tokenHeaders, URLAPI } from '../index';

interface DTOStudent {
    processNumber: number | string,
    email: string
}

export async function postStudent(alunoData: DTOStudent) {

    if (!alunoData || !alunoData.processNumber || !alunoData.email) 
        return alert('Dados do aluno inválidos: nome e email são obrigatórios');
    

    const data = tokenHeaders();
    
    const { token } = data;

    try {
        const response = await axios.post(
                                            `${URLAPI}alunos`, 
                                            alunoData,
                                            {
                                                headers: {
                                                    Authorization: `Bearer ${token}`,
                                                },
                                            }
                                        );
        if (!response.data) {
            throw new Error('Nenhum aluno criado');
        }
        return response.data;
    } catch (error) {
        console.error('Erro ao criar aluno:', error);
        throw error;
    }

}