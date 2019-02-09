import React from 'react';
import {ListGroup, ListGroupItem} from 'reactstrap';


function CheckText(props) {
    return (
        <ListGroup xs={12} className='ml-1'>
            {props.foodQuantity() > 0 ?
                <ListGroupItem className='mt-2'>
                    <span>
                        <span className='m-0'>{props.foodName} x{props.foodQuantity()}: {props.price * props.foodQuantity()}</span>
                    </span>
                    <span>
                        <button className="btn btn-danger float-right"
                                onClick={(event) => props.onChangeFood(event)}><i className="fas fa-trash-alt"> </i>
                        </button>
                    </span>
                </ListGroupItem>
                : null}
        </ListGroup>
    )
}

export default CheckText;