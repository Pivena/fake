import { Grid, Typography } from '@mui/material'
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
            <Grid
                container
                spacing={3}
                direction="row"
                justifyContent="center"
                alihnItems="center"
            >
                <Grid item xs={12} sm={6} md={4}>
                    <ProductListItem />
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <ProductListItem />
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <ProductListItem />
                </Grid>
            </Grid>
            <ProductListItem />
            <ProductListItem />
            <ProductListItem />
        </>
    )
}
