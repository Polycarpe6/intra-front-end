import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { SignIn, SignUp, Student, Teacher } from '../pages'

export function LoginRoute() {

    return (
        <Routes>
            <Route path="/" element={<SignIn />}/>
            <Route path="signup/*" element={<SignUp />}/>
            <Route path="signup/student" element={<Student />}/>
            <Route path="signup/teacher" element={<Teacher />}/>
        </Routes>
    )
    }
