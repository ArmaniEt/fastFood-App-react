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
            <Col xs={4}>
                <button className="btn btn-danger" disabled={props.isDisabled()} onClick={(event) => props.onChangeFood(event)}><i className="fas fa-trash-alt"> </i></button>
            </Col>
        </Row>
    )
}

export default CheckText;