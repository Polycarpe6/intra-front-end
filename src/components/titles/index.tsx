import stl from './titles.module.css'


interface ITitleAndDescription {
    title: string;
    desc: string;
}

export function TitleAndDescription({title, desc}:ITitleAndDescription) {

    return (
        <article className={`${stl.card_title} anime-bottom`}>
            <strong>{title}</strong>

            <small className={stl.card_desc}>
                {desc}
            </small>
        </article>
    )
}

interface ITitleDescriptionLoginFrom {
    title: string;
    desc: string;
}

export function TitleDescriptionLoginFrom({title, desc}:ITitleDescriptionLoginFrom) {

    return (
        <div className={stl.title_description_loginfrom}>
            <p>
                {title} <span>INTRA</span>
            </p>
            <strong>
                {desc}
            </strong>
        </div>
    )
}

interface ITitleNotFound {
    title: string;
    desc: string;
}

export function TitleNotFound({title, desc}:ITitleNotFound) {

    return (
        <div className={`${stl.title_not_found} anime-bottom`}>
            <p>
                {title}
            </p>
            <span>
                {desc}
            </span>
        </div>
    )
}
