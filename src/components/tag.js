import React from 'react'

const Tag = ({name,active}) => {
    return (
        <button className={`${active ? "btn btn-primary" : "btn btn-warning"}`}>
            {name}
        </button>
    )
}

export default Tag
