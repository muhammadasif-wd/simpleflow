import React from 'react'

const Title = ({ title, styles }) => {
    return (
        <main>
            <h1 className={`2xl:text-6xl xl:text-5xl lg:text-4xl md:text-3xl sm:text-2xl text-xl z-1 ${styles}`}>{title}</h1>
        </main>
    )
}

export default Title