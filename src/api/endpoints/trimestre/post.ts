import axios from 'axios';
import { getTrimestres, URLAPI } from '../index';

interface DTOTrimestre {
    ano: number;
    numero: number;
    inicio: Date;
    fim: Date;
}

async function validateDataTrimestre(trimestreData: DTOTrimestre) {

    if (!trimestreData.ano || !trimestreData.numero || !trimestreData.inicio || !trimestreData.fim) 
        return alert('Todos os campos devem ser preenchidos');

    const response = await getTrimestres();

    const trimestreQuantitySession = response.filter((trimestre: any) => trimestre.ano === trimestreData.ano);

    if (trimestreQuantitySession.length === 3)
        return alert('Este ano já tem 3 trimestres registrados');

    console.log("response", response);

}


export async function postTrimestre(trimestreData: DTOTrimestre) {

    // let responseValidation = await validateDataTrimestre(trimestreData);

    try {
        const response = await axios.post(`${URLAPI}trimestres`, trimestreData);
        return response.data;
    } catch (error) {
        console.error('Erro ao registrar trimestre:', error);
        throw error;
    }
}