import React, { Fragment } from 'react'
import Header from './Header/Header'

const MainLayout = ({ children }) => {
    return (
        <Fragment>
            <Header />
            <main className='grow'>
                {children}
            </main>
        </Fragment>
    )
}

export default MainLayout