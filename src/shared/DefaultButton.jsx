import { Button } from '@nextui-org/react'
import React from 'react'

const DefaultButton = ({ name, styles, event }) => {
    return (
        <main>
            <Button type='submit' onClick={event ?? ''} className={`${styles} capitalize bg-gradient-to-r from-secondaryColor to-lightSecondary text-white`}>{name}</Button>
        </main>
    )
}

export default DefaultButton