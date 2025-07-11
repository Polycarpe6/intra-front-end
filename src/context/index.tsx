import React, {
  createContext,
  useState,
  useEffect,
  useContext,
} from 'react';
import {
  AlunoDetalhado,
  getClasseById,
  getClasses,
  getStudent,
  getStudentById,
  getTeacher,
  getTeacherById,
  IProfessorById,
} from '../api/endpoints';

// Tipos
type InnerUserType = {
  id: number;
  nome: string;
  email: string;
  role: 'admin' | 'student' | 'teacher' | string;
  createdAt: string;
  authId: string;
};

type UserContextData = {
  token: string;
  user: InnerUserType;
};

type UserContextType = {
  data: UserContextData;
  setData: React.Dispatch<React.SetStateAction<UserContextData>>;
  listClasses: any[];
  listStudents: any[];
  listTeachers: any[];
  dataStudent: AlunoDetalhado | null;
  dataTeacher: IProfessorById | null;
  studentClass: TurmaDetalhada | null;
};

// Valor padrão
const DEFAULT_USER: UserContextData = {
  token: '',
  user: {
    id: 0,
    nome: '',
    email: '',
    role: '',
    createdAt: '',
    authId: '',
  },
};

// Criação do contexto
export const UserContext = createContext<UserContextType>({
  data: DEFAULT_USER,
  setData: () => {},
  listClasses: [],
  listStudents: [],
  listTeachers: [],
  dataStudent: null,
  dataTeacher: null,
  studentClass: null,
});

export interface TurmaDetalhada {
  id: number;
  cursoId: number;
  nome: string;
  ano: number;
  createdAt: string;
  curso: Curso;
  matriculas: Matricula[];
  turmaDisciplinas: TurmaDisciplina[];
}

export interface Curso {
  id: number;
  nome: string;
  createdAt: string;
}

export interface Matricula {
  id: number;
  alunoId: number;
  turmaId: number;
  dataMatricula: string;
  aluno: Aluno;
}

export interface Aluno {
  id: number;
  nome: string;
  processNumber: number;
  birthDate: string;
  biNumber: string | null;
  email: string;
  createdAt: string;
  authId: string;
}

export interface TurmaDisciplina {
  id: number;
  turmaId: number;
  disciplinaId: number;
  professorId: number;
  disciplina: Disciplina;
  professor: Professor;
}

export interface Disciplina {
  id: number;
  nome: string;
}

export interface Professor {
  id: number;
  nome: string;
  email: string;
  createdAt: string;
  authId: string;
}


// Provider
export function UserStorage({ children }: { children: React.ReactNode }) {
  const [data, setData] = useState<UserContextData>(() => {
    const saved = localStorage.getItem('INTRADB');
    return saved ? JSON.parse(saved) : DEFAULT_USER;
  });

  const { user } = data;

  const [listClasses, setListClasses] = useState<any[]>([]);
  const [listStudents, setListStudents] = useState<any[]>([]);
  const [listTeachers, setListTeachers] = useState<any[]>([]);

  const [studentClass, setStudentClass] = useState<TurmaDetalhada | null>(null)

  const [dataStudent, setDataStudent] = useState<AlunoDetalhado | null>(null);
  const [dataTeacher, setDataTeacher] = useState<IProfessorById | null>(null);

  useEffect(() => {
    async function handleAdmin() {
      const [classes, students, teachers] = await Promise.all([
        getClasses(),
        getStudent(),
        getTeacher(),
      ]);
      if (classes) setListClasses(classes);
      if (students) setListStudents(students);
      if (teachers) setListTeachers(teachers);
    }

    async function handleStudent() {
      const response = await getStudentById(user.id);
      if (response) setDataStudent(response);

      const classe = await getClasseById(response.matricula[0].turma.id);
      if (classe) setStudentClass(classe);
    }

    async function handleTeacher() {
      const response = await getTeacherById(user.id);
      if (response) setDataTeacher(response as IProfessorById);
    }

    if (user.role === 'admin') handleAdmin();
    if (user.role === 'student') handleStudent();
    if (user.role === 'teacher') handleTeacher();

    return () => {
      setListClasses([]);
      setListStudents([]);
      setListTeachers([]);
    };
  }, [user.id, user.role]);

  useEffect(() => {
    localStorage.setItem('INTRADB', JSON.stringify(data));
  }, [data]);

  if (user.role === 'student' && !dataStudent) return null;
  if (user.role === 'teacher' && !dataTeacher) return null;

  return (
    <UserContext.Provider
      value={{
        data,
        setData,
        listClasses,
        listStudents,
        listTeachers,
        dataStudent,
        dataTeacher,
        studentClass,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}
