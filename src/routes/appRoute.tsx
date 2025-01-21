import React from 'react'
import { Class, Classes, Home, Login, Profile } from '../pages'
import { Aside, Header, Processes } from '../components'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

export function AppRoute() {

    const [data, setData] = React.useState({
        isLoggedIn: false,
        user: "student",
        token: true,
    })

    if (!data.token)
        return (
            <BrowserRouter>
                <Routes>
                    <Route path="/*" element={<Login />} />
                </Routes>
            </BrowserRouter>
        )

    return (
        <BrowserRouter>
            <Header />
            <Aside />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/class" element={<Class />} />
                <Route path="/classes" element={<Classes />} />
                <Route path="/profile" element={<Profile />} />
            </Routes>
            <Processes />
        </BrowserRouter>
    )

}
