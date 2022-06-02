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
                alignItems="center"
            >
                <Grid item xs={12} sm={6} md={4}>
                    <ProductListItem
                        name="iPhone XS"
                        description="This is iPhone XS"
                        type="Phone"
                        capacity="64"
                        price="500"
                    />
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <ProductListItem
                        name="iPhone XS"
                        description="This is iPhone 13 PRO"
                        type="Phone"
                        capacity="128"
                        price="1000"
                    />
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <ProductListItem
                        name="iPhone XS"
                        description="This is iPhone 12"
                        type="Phone"
                        capacity="264"
                        price="1500"
                    />
                </Grid>
            </Grid>
            <ProductListItem />
            <ProductListItem />
            <ProductListItem />
        </>
    )
}
