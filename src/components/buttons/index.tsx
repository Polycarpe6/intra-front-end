import React from 'react'
import stl from './buttons.module.css'


interface IBtnLogin {
    text: string;
    onClick?: () => void;
}

export function BtnLogin({text, onClick}:IBtnLogin) {

    return (
        <button className={stl.btn} onClick={onClick}>
            {text}
        </button>
    )
}

interface IBtnDelete {
    text: string;
    onClick?: () => void;
}

export function BtnDelete({text, onClick}:IBtnDelete) {

    return (
        <button className={stl.btn} onClick={onClick}>
            {text}
        </button>
    )
}
