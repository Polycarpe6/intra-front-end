import axios from 'axios';
import { tokenHeaders, URLAPI } from '../index';


export async function deleteStudent(idStudent: number) {

    const data = tokenHeaders();
        
    const { token } = data;

    try {
        const response = await axios.delete(`${URLAPI}alunos/${idStudent}`,
                                                {
                                                    headers: {
                                                        Authorization: `Bearer ${token}`,
                                                    },
                                                }
                                            );
        alert("Aluno removido com Sucesso!")
        return response.data;
    } catch (error) {
        alert("Erro ao eliminar o aluno!!");
        throw error;
    }
}