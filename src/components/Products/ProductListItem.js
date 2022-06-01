import { Button, Card, CardActions, CardContent } from '@mui/material'
import Reacr from 'react'

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
            <CardActions>
                <Button>Add to cart</Button>
            </CardActions>
        </Card>
    )
}
