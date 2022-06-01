import React from 'react'
import './CartHeader.scss'

export const CartHeader = () => {
    const isLoaded = false
    return (
        <div className={isLoaded ? 'white' : 'red'}>
            <div>0</div>
            <div>0$</div>
        </div>
    )
}
/*
import { ClassNames } from '@emotion/react'
const useStyles = makeStyles({
    cartHeader: {
        marginLeft: 10,
    },
})
*/
