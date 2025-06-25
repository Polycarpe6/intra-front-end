import React from 'react'
import stl from './notification.module.css'
import { CardProfile, Col_Xl_9, TitleDescLink } from '../../components'

export function Notification() {

    return (
        <main className={`container ${stl.notification_page}`}>

            <Col_Xl_9 className={stl.notification_search}>

                <TitleDescLink
                    title={"Notificações"}
                    desc={"Veja as novidades, avisos e notificações do seu curso"}
                    linkPath={""}
                />

                

            </Col_Xl_9>

            <CardProfile />
        
        </main>
    )
}