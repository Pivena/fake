import React from 'react'
import { Button, Card, CardActions, CardContent } from '@mui/material'
import './ProductListItem.scss'

export const ProductListItem = () => {
    return (
        <Card>
            <CardContent>
                <h4>iphone XS</h4>
                <p>This is iPhone XS</p>
                <div>Type: phone</div>
                <div>Capacity: 64GB</div>
                <div>500$</div>
            </CardContent>
            <CardActions className="add-to-cart-block">
                <Button variant="contained">Add to cart</Button>
            </CardActions>
        </Card>
    )
}
