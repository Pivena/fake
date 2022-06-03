import React from 'react'
import { Button, Card, CardActions, CardContent } from '@mui/material'
import './ProductListItem.scss'

export const ProductListItem = ({
    name,
    description,
    type,
    capacity,
    price,
}) => {
    return (
        <Card>
            <CardContent>
                <h4>{name}</h4>
                <p>{description}</p>
                <div>Type:{type}</div>
                <div>Capacity:{capacity} Gb</div>
                <div>{price}$</div>
            </CardContent>
            <CardActions className="add-to-cart-block">
                <Button variant="contained">Add to cart</Button>
            </CardActions>
        </Card>
    )
}
