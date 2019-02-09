import React from 'react';
import {Row, Col} from 'reactstrap';
import CheckText from "../CheckText/CheckText";
import {AVAILABLE_FOOD} from "../../App";


function OrderForm(props) {
    return (
            <Col className='border border-dark m-2 rounded'>
                {props.empty ? <h5 className='mt-1'>Order is empty, Please add some items!</h5>
                    : AVAILABLE_FOOD.map(item => <CheckText foodName = {item.name}
                                                            foodQuantity = {() => props.countQuantity(item.name)}
                                                            key={item.name}
                                                            onChangeFood={(event) => props.onChangeFood(item.name, event)}
                                                            isDisabled = {() => props.isDisabled(item.name)}
                                                            price = {item.price}

                />)}
                <p className='mt-2'>Total: {props.countTotal()} KGS</p>
            </Col>
    )

}

export default OrderForm;