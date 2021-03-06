import React from 'react'

export default function Div({ children, className, style }) {
    return (
        <div className={className} style={style}>
            { children }
        </div>
    )
}
