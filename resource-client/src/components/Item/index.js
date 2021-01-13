import React from 'react'
import { Card } from 'react-bootstrap';

function Item( { item } ) {
    return (
        <Card className='my-3 p-3 rounded'>
            <a href={`/inventory/${item._id}`}></a>
            
        </Card>
    )
}

export default Item;
