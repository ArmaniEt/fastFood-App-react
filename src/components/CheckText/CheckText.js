import React from 'react';
import {Row, Col} from 'reactstrap';


function CheckText(props) {
    return (
        <Row className='ml-1'>
            <Col className='mt-2' xs={7}>
                <p className='m-0'>{props.foodName} x{props.foodQuantity()}: {props.price * props.foodQuantity()}</p>
            </Col>
            <Col className='mt-2' xs={4}>
                <button className="btn btn-danger" disabled={props.isDisabled()}
                        onClick={(event) => props.onChangeFood(event)}><i className="fas fa-trash-alt"> </i></button>
            </Col>
        </Row>
    )
}

export default CheckText;