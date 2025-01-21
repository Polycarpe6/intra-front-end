import React from 'react'
import style from './title-desc-link.module.css'
import { Link } from 'react-router-dom';


interface ITitleDescLink {
    title: string;
    desc: string;
    linkPath: string | null
}

export function TitleDescLink({title, desc, linkPath}:ITitleDescLink) {

    return (
        <article className={`${style.card_title_desc_linkPath} anime-bottom`}>
            <div className={style.card_head}>
                <strong>{title}</strong>
                <Link to={linkPath} style={{display: linkPath? "flex": "none"}}>Ver mais</Link>
            </div>

            <small className={style.card_desc}>
                {desc}
            </small>
        </article>
    )
}
