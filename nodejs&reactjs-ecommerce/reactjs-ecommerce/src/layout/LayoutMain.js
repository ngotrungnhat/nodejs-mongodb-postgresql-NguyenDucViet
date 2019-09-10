import React from 'react'
import Header from './Header'

const LayoutMain = ({ children, header }) => {
    return (
        <div>
            <Header {...header} />
            <div>{children}</div>
        </div>
    )
}

export default LayoutMain
