import React from 'react'
import stl from './trimestre.module.css'
import { getTrimestres } from '../../api/endpoints';
import { CardProfile, CardSearch, CardTrimestre, Col_Xl_9, TitleDescLink, TitleNotFound } from '../../components'

export function Trimestre() {

    const [listTrimestre, setListTrimestre] = React.useState([]);
        
    const getAllTrimestre = async () => {
        const response: any = await getTrimestres();

        if (!response)
            return alert("Não foi possivel buscar trimestres")

        setListTrimestre(response);
        
    }
    
    React.useEffect(() => {
        getAllTrimestre();
    }, [])

    console.log(listTrimestre)
    

    return (
        <main className={`container ${stl.trimestre_page}`}>

            <Col_Xl_9 className={stl.trimestre_content}>

                <TitleDescLink
                    title={"Trimestres"}
                    desc={"Veja os trimestres, e suas evoluções..."}
                    linkPath={""}
                />

                <CardSearch
                    placeholder='Busque os Trimestres'
                    btnTrimestre={true}
                />


                <div className={`${stl.trimestre_list} anime-bottom`} >

                    {
                        listTrimestre.map((trimestre, key) => (
                            <CardTrimestre
                                id={trimestre.id}
                                numero={trimestre.numero}
                                key={key}
                                ano={trimestre.ano}
                                inicio={trimestre.inicio}
                                fim={trimestre.fim}
                            />
                        ))
                    }

                    {
                        (listTrimestre.length === 0) && (
                            <TitleNotFound
                                title={"Nenhum Trimestre encontrado"}
                                desc={"Você ainda não possui nenhum trimestre cadastrado."}
                            />
                        )
                    }

                    


                </div>


                

            </Col_Xl_9>

            <CardProfile />
        
        </main>
    )
}