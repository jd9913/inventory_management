import React from 'react';
import Item from '../components/Item';
import items from '../../../Item';

import { Row, Col } from 'react-bootstrap';

function HomePage() {
    return (
        <div>
            <h1>Inventory</h1>
            <Row>
                {items.map(item=>(
                    <Col sm={12} md={6} lg={4}>
                        <Item item={item} />
                    </Col>
                ))}
            </Row>
        </div>
    )
}

export default HomePage;
