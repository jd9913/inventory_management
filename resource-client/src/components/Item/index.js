import React from 'react'
import { Card } from 'react-bootstrap';

function Item({ item }) {
    return (
        <Card className='my-3 p-3 rounded'>
            <a href={`/inventory/${item._id}`}></a>
            <Card.Body>
                <a href={`/inventory/${item._id}`}>
                    <Card.Title as='div'><strong>{item.name}</strong>

                    </Card.Title>
                </a>
                <Card.Text as='div'>{item.totQuantity}</Card.Text>
            </Card.Body>

        </Card>
    )
}

export default Item;
