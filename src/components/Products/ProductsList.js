import { Typography } from '@mui/material'
import React from 'react'
import { ProductListItem } from './ProductListItem'

export const ProductsList = () => {
    return (
        <>
            <Typography
                variant="h4"
                align="center"
                style={{
                    marginTop: 30,
                    textTransform: 'uppercase',
                }}
            >
                Products List
            </Typography>
            <ProductListItem />
            <ProductListItem />
            <ProductListItem />
        </>
    )
}
