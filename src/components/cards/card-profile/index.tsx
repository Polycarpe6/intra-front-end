import React from 'react'
import { Col_Xl_3 } from '../../col'
import { Link } from 'react-router-dom'
import stl from './card-profile.module.css'
import { BsAward, BsFolder, BsMortarboard } from 'react-icons/bs'
import { PeopleGroup } from '../../people'
import img_profile from '../../../assets/img/default.jpg'
import { ChartMain } from '../../chart'

export function CardProfile() {

    return (
        <Col_Xl_3 className={`${stl.card_profile}`}>

            <div className={stl.content}>
                    
                <div className={stl.img_name_level}>
                    <div className={stl.cicle_img}>
                        <img src={img_profile} alt="" />
                    </div>
                    <div className={stl.name_level}>
                        <Link to={"/profile"}>
                            Osvaldo Pascual
                        </Link>
                        <small>
                            <BsMortarboard />
                            <span className="phone-user-online">II10A - Nº Proc 34524</span>
                        </small>
                    </div>
                </div>

                <PeopleGroup
                    desc={"+35 colegas de turma"}
                    linkPath={"/people"}
                />


                <p className={stl.about_me}>
                    Olá, seja bem-vindo no meu perfil!!
                </p>

                <ChartMain />

            </div>

        </Col_Xl_3>
    )
}
