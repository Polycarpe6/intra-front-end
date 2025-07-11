import axios from 'axios';
import { tokenHeaders, URLAPI } from '../index';


export async function getTeacherById(id: number) {

  const data = tokenHeaders();

  const { token } = data;

  try {
    const response = await axios.get<{
      id: number,
      nome: string,
      email: string,
      createdAt: string,
      authId: string,
      turmaDisciplinas: [],
      turmas: [],
      alunos: []
    }>(
      `${URLAPI}professores/` + id,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Erro ao buscar professores:", error);
    return [];
  }
}