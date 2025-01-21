import React from 'react'
import style from './processes.module.css'
import { Link } from 'react-router-dom'
import { BsBarChart, BsFolder } from 'react-icons/bs'


export function Processes() {

    return (
        <Link to={"processes"} className={`${style.processes} anime-move-my-cart`}>
            <BsBarChart />
        </Link>
    )
}
