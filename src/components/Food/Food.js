import React from 'react';
import {Row, Col} from 'reactstrap';
import {Card, Button, CardTitle, CardText} from 'reactstrap';


function Food(props) {
    return (

        <Col xs={6}>
            <Card className="m-2" body inverse color="info">
                <CardTitle>{props.name}</CardTitle>
                <CardText>Price: {props.price}</CardText>
                <Button color="secondary">Button</Button>
            </Card>
        </Col>

    )

}


export default Food;
