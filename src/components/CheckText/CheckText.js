import React from 'react';
import {Row, Col} from 'reactstrap';

// from App => OrderForm
// OrderForm => CheckText: (total, quantity, name)
// additionally do delete button

function CheckText(props) {
    return (
        <Row className='ml-1'>
            <p>{props.foodName}: </p>
            <p>{props.foodQuantity()}</p>
            <Col>
                <i onClick={(event) => props.onChangeFood(event)} className="fas fa-trash-alt"> </i>
            </Col>
        </Row>
    )
}

export default CheckText;