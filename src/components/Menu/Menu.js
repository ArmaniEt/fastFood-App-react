import React from 'react';
import {Row, Col} from 'reactstrap';
import {AVAILABLE_FOOD} from "../../App";
import Food from "../Food/Food"

function Menu(props) {
    return (
        <Col className="border border-dark">
            <h5>Add items: </h5>
            <Row>
                {AVAILABLE_FOOD.map(item => <Food
                    key={item.name}
                    price={item.price}
                    name={item.name}
                />)}
            </Row>

        </Col>

    )
}


export default Menu;