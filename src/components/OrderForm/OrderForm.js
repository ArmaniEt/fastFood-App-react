import React from 'react';
import {Row, Col} from 'reactstrap';
import CheckText from "../CheckText/CheckText";



function OrderForm(props) {
    return (
        // use if else statement to show some layout


            <Col className='border border-dark m-2'>
                {props.empty ? <h5>Order is empty, Please add some items!</h5> : <CheckText/>}
            </Col>
    )

}

export default OrderForm;