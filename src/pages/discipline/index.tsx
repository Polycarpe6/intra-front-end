import React from 'react'
import stl from './discipline.module.css'
import { CardProfile, CardSearch, Col_Xl_9, TitleDescLink } from '../../components'

export function Discipline() {

    return (
        <main className={`container ${stl.discipline_page}`}>

            <Col_Xl_9 className={stl.section_discipline}>

                    <TitleDescLink
                        title={"Disciplinas"}
                        desc={"Veja todas as disciplinas do seu curso"}
                        linkPath={""}
                    />

                    <CardSearch
                        placeholder={"Busca disciplinas"}
                        sugest1={"Todas"}
                        
                    />
                    
            </Col_Xl_9>

            <CardProfile />
        </main>
    )
}
