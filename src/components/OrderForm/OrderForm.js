import React from 'react';
import {Row, Col} from 'reactstrap';
import CheckText from "../CheckText/CheckText";
import {AVAILABLE_FOOD} from "../../App";


function OrderForm(props) {
    return (
        // use if else statement to show some layout


            <Col className='border border-dark m-2'>
                {props.empty ? <h5>Order is empty, Please add some items!</h5>
                    : AVAILABLE_FOOD.map(item => <CheckText foodName = {item.name}
                                                            foodQuantity = {() => props.countQuantity(item.name)}
                                                            key={item.name}
                                                            onChangeFood={(event) => props.onChangeFood(item.name, event)}

                />)}
                <p>Total: {props.countTotal()}</p>
            </Col>
    )

}

export default OrderForm;