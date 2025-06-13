import React from 'react'
import stl from './cursos.module.css'
import { getCursos } from '../../api/endpoints';
import { CardCurso, CardProfile, CardSearch, Col_Xl_9, TitleDescLink } from '../../components'

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

                <TitleDescLink
                    title={"Lista dos Cursos"}
                    desc={"Encontre todos os cursos registrado na plataforma!"}
                    linkPath={""}
                />

                <CardSearch
                    placeholder={"Busque um Curso!"}
                />

                <div className={`${stl.cursos_list} anime-bottom`} >

                    {
                        listCursos.map((curso, key) => (
                            <CardCurso
                                id={curso.id}
                                key={key}
                                nome={curso.nome}
                            />
                        ))
                    }

                </div>

            </Col_Xl_9>

            <CardProfile />
        
        </main>
    )
}
