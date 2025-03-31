import React from 'react'

export function HookWindowAddStudent() {

    const [stateWindowAddStudent, setStateWindowAddStudent] = React.useState(false)

    function handleWindowAddStudent() {
        setStateWindowAddStudent(!stateWindowAddStudent)
    }

    return {
        stateWindowAddStudent,
        handleWindowAddStudent,
    }
}
