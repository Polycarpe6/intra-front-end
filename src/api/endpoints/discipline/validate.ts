import { getDiscipline } from "./get";

interface DTODiscipline {
    nome: string;
}

export async function validateDiscipline(disciplineData: DTODiscipline): Promise<boolean> {

    const allDisciplina = await getDiscipline();


    if (disciplineData.nome.trim() === '') {
        alert('O nome da disciplina é obrigatório.');
        return false;
    }

    if (disciplineData.nome.length < 2) {
        alert('O nome da disciplina deve ter pelo menos 2 caracteres.');
        return false;
    }

    if (disciplineData.nome.length > 50) {
        alert('O nome da disciplina deve ter no máximo 50 caracteres.');
        return false;
    }

    const exists = allDisciplina.some(
        (disciplina: DTODiscipline) => disciplina.nome.toLowerCase() === disciplineData.nome.toLowerCase()
    );

    if (exists) {
        alert(`Disciplina já cadastrada: ${disciplineData.nome}`);
        return false;
    }

    return true;

}