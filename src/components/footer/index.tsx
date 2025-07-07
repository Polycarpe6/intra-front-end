import stl from "./footer.module.css"

export function Footer() {

    return (
        <footer className={`${stl.footer} anime-bottom`}>
            <div className={stl.line}></div>
            <div className={stl.content}>
                <span>INTRA</span> - <span>Todos direitos reservados</span>
            </div>
            <div className={stl.line}></div>
        </footer>
    )
}