import React from 'react'
///simplesmente poe um container ao redor
const Layout = ({children}) => {
    return (
        <div className='container-fluid  my-3'>
            {children}
        </div>
    )
}

export default Layout
