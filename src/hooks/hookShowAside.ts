import React from 'react'

export function HookShowAside() {

    const [showAside, setshowAside] = React.useState(false)

    function handleShowAside() {
        setshowAside(!showAside)

        console.log(showAside)
    }

    return {
        showAside,
        setshowAside,
        handleShowAside,
    }
}