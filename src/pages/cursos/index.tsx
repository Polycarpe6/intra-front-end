import React, { Suspense } from 'react'
import stl from './cursos.module.css'
import { getCursos } from '../../api/endpoints';
import { CardCurso, CardProfile, CardSearch, Col_Xl_9, TitleAndDescription, TitleDescLink, TitleNotFound } from '../../components'

export function Cursos() {


    const [listCursos, setlistCursos] = React.useState([]);
    
    const getAllCurso = async () => {
        const curso: any = await getCursos();
        setlistCursos(curso);
    }
    
    React.useEffect(() => {
        getAllCurso();
    }, [])

    
    return (
        <main className={`container ${stl.cursos_page}`}>

            <Col_Xl_9 className={stl.section_cursos}>

                <TitleAndDescription 
                    title={"Cursos Registrados"}
                    desc={"Aqui estão todos os cursos disponíveis na plataforma INTRA."}
                />

                <CardSearch
                    placeholder={"Busque um Curso!"}
                    btnCurso={true}
                />

                <div className={`${stl.cursos_list} anime-bottom`} >

                    <Suspense fallback={<div>Loading...</div>}>
                        {
                            listCursos.map((curso, index) => (
                                <CardCurso
                                    id={curso.id}
                                    index={`0${index + 1}`}
                                    nome={curso.nome}
                                />
                            ))
                        }
                    </Suspense>

                    {
                    
                        (listCursos.length === 0) && (
                            <TitleNotFound
                                title={"Nenhum Curso Encontrado!"}
                                desc={"Parece que não há cursos registrados na plataforma."}
                            />
                        )
                    
                    }

                </div>

            </Col_Xl_9>

            <CardProfile />
        
        </main>
    )
}
