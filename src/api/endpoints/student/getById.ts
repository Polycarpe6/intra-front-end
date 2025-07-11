import axios from 'axios';
import { URLAPI, tokenHeaders } from '../index';


interface Tests {
    id: number,
    tipo: string,
    data: string
    peso: number,
    turma_disciplina_id: number,
    trimestre_id: number
}

export interface AlunoDetalhado {
    aluno: Aluno
    matricula: Matricula[]
    tests: Tests[]
    colegas: number
}

export interface Aluno {
    id: number
    nome: string
    processNumber: number
    birthDate: string
    biNumber: string | null
    email: string
    createdAt: string
    authId: string
}

export interface Matricula {
    id: number
    alunoId: number
    turmaId: number
    dataMatricula: string
    turma: Turma
}

export interface Turma {
    id: number
    cursoId: number
    nome: string
    ano: number
    createdAt: string
    curso: Curso
    turmaDisciplinas: TurmaDisciplina[]
}

export interface Curso {
    id: number
    nome: string
    createdAt: string
}

export interface TurmaDisciplina {
    id: number
    turmaId: number
    disciplinaId: number
    professorId: number
    disciplina: Disciplina
    professor: Professor
    testes: Tests[]
}

export interface Disciplina {
    id: number
    nome: string
}

export interface Professor {
    id: number
    nome: string
    email: string
    createdAt: string
    authId: string
}


export async function getStudentById(id: number) {

    const data = tokenHeaders();

    const { token } = data

    try {
        const response = await axios.get<AlunoDetalhado>(
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