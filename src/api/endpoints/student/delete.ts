import axios from 'axios';
import { URLAPI } from '../index';


export async function deleteStudent(idStudent: number) {
    try {
        const response = await axios.delete(`${URLAPI}alunos/${idStudent}`);
        return response.data;
    } catch (error) {
        console.error("Erro ao eliminar o aluno!!:", error);
        throw error;
    }
}