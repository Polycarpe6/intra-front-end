import axios from 'axios';
import { tokenHeaders, URLAPI } from '../index';

export interface IProfessorById {
  id: number
  nome: string
  email: string
  createdAt: string
  authId: string
  turmaDisciplinas: TurmaDisciplina[]
  alunos: Aluno[]
  turmas: TurmaProfessor[]
}
 interface TurmaDisciplina {
  id: number
  turmaId: number
  disciplinaId: number
  professorId: number
  turma: Turma
  disciplina: Disciplina
}

 interface Turma {
  id: number
  cursoId: number
  nome: string
  ano: number
  createdAt: string
}

 interface Disciplina {
  id: number
  nome: string
}

 interface Aluno {
  id: number
  nome: string
  processNumber: number
  birthDate: string
  biNumber: string | null
  email: string
  createdAt: string
  authId: string
}

 interface TurmaProfessor {
  id: number
  turmaId: number
  disciplinaId: number
  professorId: number
  turma: Turma
}


export async function getTeacherById(id: number) {

  const data = tokenHeaders();

  const { token } = data;

  try {
    const response = await axios.get<IProfessorById>(
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