import React from 'react'

const Subtitle = ({ subtitle, styles }) => {
    return (
        <main>
            <h3 className={`3xl:text-3xl lg:text-2xl md:text-xl text-base ${styles}`}>{subtitle}</h3>
        </main>
    )
}

export default Subtitle