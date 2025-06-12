import React from 'react'
import stl from './search.module.css'
import { CardProfile, CardSearch, Col_Xl_9, TitleDescLink } from '../../components'

export function Search() {
    
    return (
        <main className={`container ${stl.search_page}`}>

            <Col_Xl_9 className={stl.section_search}>

                <TitleDescLink
                    title={"Busca Geral"}
                    desc={"Encontre pessoas, professores, disciplinas ou turmas"}
                    linkPath={""}
                />

                <CardSearch
                    placeholder={"Faz uma busca geral"}
                />

            </Col_Xl_9>

            <CardProfile />
        
        </main>
    )
}
