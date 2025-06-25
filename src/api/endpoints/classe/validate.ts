import { getClasses } from "./get";

interface DTOTurma {
    nome: string;
    ano: number;
    cursoId: number;
}

export async function validateClasse(classeData: DTOTurma): Promise<boolean> {

    const allClasse = await getClasses();

    const existingClasse = allClasse.some((classe: DTOTurma) =>
            classe.nome === classeData.nome &&
            classe.ano === classeData.ano &&
            classe.cursoId === classeData.cursoId
    );

    if (existingClasse) {
        alert("Já existe uma turma com os mesmos dados.");
        return false;
    }

    if (!classeData.nome || !classeData.ano || !classeData.cursoId) {
        alert("Todos os campos devem ser preenchidos.");
        return false;
    }

    if (classeData.nome.length < 5) {
        alert("O nome da turma deve ter pelo menos 5 caracteres.");
        return false;
    }


    return true;
}