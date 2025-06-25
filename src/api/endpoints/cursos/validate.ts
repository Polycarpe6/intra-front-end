import { getCursos } from "./get";

interface DTOCurso {
    nome: string;
}

export async function validateCursoData(cursoData: DTOCurso): Promise<boolean> {
    const allCurso = await getCursos();

    if (!cursoData.nome || cursoData.nome.trim() === '') {
        alert('O nome do curso é obrigatório.');
        return false;
    }

    if (cursoData.nome.length < 7) {
        alert('O nome do curso deve ter pelo menos 7 caracteres.');
        return false;
    }

    if (cursoData.nome.length > 50) {
        alert('O nome do curso deve ter no máximo 50 caracteres.');
        return false;
    }

    const exists = allCurso.some(
        (curso: DTOCurso) => curso.nome.toLowerCase() === cursoData.nome.toLowerCase()
    );

    if (exists) {
        alert(`Curso já cadastrado: ${cursoData.nome}`);
        return false;
    }

    return true;
}