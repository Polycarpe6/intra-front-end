import React from 'react'
import { BsSearch } from 'react-icons/bs'
import { NavLink } from 'react-router-dom'
import stl from './card-search.module.css'


interface ICardSearchProps {
    placeholder: string;
    sugest1: string;
    sugest2: string;
    sugest3: string;
}
export function CardSearch({placeholder, sugest1, sugest2, sugest3}: ICardSearchProps) {
    return (
        <article className={`${stl.card_search} anime-bottom`}>

            <div className={stl.card_input_icon}>
                <input 
                    type="text" 
                    placeholder={placeholder} 
                />
                <BsSearch />
            </div>

            <nav className={stl.nav_search}>
                <NavLink to={""}>{sugest1}</NavLink>
                <NavLink to={""}>{sugest2}</NavLink>
                <NavLink to={""}>{sugest3}</NavLink>
            </nav>
        </article>
    )
}
