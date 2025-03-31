import React from 'react'
import stl from './buttons.module.css'
import { BsPlus } from 'react-icons/bs';


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


interface IBtnAdd {
    text: string;
    onClick?: () => void;
}

export function BtnAdd({text, onClick}:IBtnAdd) {

    return (
        <button className={`${stl.btnAdd} anime-bottom`} onClick={onClick}>
            <BsPlus />
            <span>{text}</span>
        </button>
    )
}