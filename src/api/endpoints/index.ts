export const URLAPI = "https://school.baikasaude.click/";
// export const URLAPI = "https://bhbzdtk5-3000.uks1.devtunnels.ms/"

export function tokenHeaders() {
    
    const storedData = localStorage.getItem("INTRADB");
    const data: any = storedData ? JSON.parse(storedData) : {};

    return data;
}

export * from './classDiscipline/post';


export * from './student/get';
export * from './student/post';
export * from './student/post';
export * from './student/getById';
export * from './student/getByLevel';
export * from './student/delete';
export * from './student/completeProfile';


export * from './auth/signupStudent';
export * from './auth/login';


export * from './discipline/get';
export * from './discipline/post';
export * from './discipline/delete';
export * from './discipline/put';


export * from './cursos/get';
export * from './cursos/delete';
export * from './cursos/post';
export * from './cursos/put';


export * from './classe/post';
export * from './classe/get';
export * from './classe/getById';
export * from './classe/delete';
export * from './classe/put';


export * from './teacher/get'
export * from './teacher/post'
export * from './teacher/getById'


export * from './trimestre/get'
export * from './trimestre/delete'
export * from './trimestre/post'


export * from './matrículas/get'
export * from './matrículas/post'