import { Container } from '@mui/system'
import { ProductsList } from 'components/Products/ProductsList'
import React from 'react'

export const Main = () => {
    return (
        <>
            <Container>
                <ProductsList />
            </Container>
        </>
    )
}
