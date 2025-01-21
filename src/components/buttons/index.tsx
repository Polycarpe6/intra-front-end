import React from 'react'
import stl from './buttons.module.css'


interface IBtnLogin {
    text: string;
    onClick: () => void;
}

export function BtnLogin({text, onClick}:IBtnLogin) {

    return (
        <button className={stl.btn_login} onClick={onClick}>
            {text}
        </button>
    )
}
