import React from 'react'
import stl from './title-and-desc.module.css'

interface ITitleAndDesc {
    title: string;
    desc: string;
}

export function TitleAndDesc({title, desc}:ITitleAndDesc) {

    return (
        <div className={stl.title_subtitle}>
            <p>
                {title} <span>INTRA</span>
            </p>
            <strong>
                {desc}
            </strong>
        </div>
    )
}
