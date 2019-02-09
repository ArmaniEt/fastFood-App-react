import React, {Component} from 'react';
import './App.css';
import { Container, Row, Col } from 'reactstrap';
import OrderForm from './components/OrderForm/OrderForm'
import Menu from './components/Menu/Menu'

const AVAILABLE_FOOD = [
    {name: 'Hamburger', price: 80},
    {name: 'Coffee', price: 20},
    {name: 'Cheeseburger', price: 90},
    {name: 'Tea', price: 15},
    {name: 'Fries', price: 40},
    {name: 'Cola', price: 35}
];

export {AVAILABLE_FOOD};

// split to components:
// Menu, OrderForm, Food, CheckStrings

// state in the app without constructor
// add, delete food (one common method)
//

class App extends Component {
    render() {
        return (
            <div className="App">
                <Container>
                    <Row>
                        <Col xs={5}>
                            <OrderForm/>
                        </Col>
                        <Col xs={7}>
                            <Menu/>
                        </Col>
                    </Row>

                </Container>
            </div>
        );
    }

    state = {
        check: {
            hamburger: {count: 0, total: 0},
            coffee: {count: 0, total: 0},
            cheeseburger: {count: 0, total: 0},
            tea: {count: 0, total: 0},
            fries: {count: 0, total: 0},
            cola: {count: 0, total: 0}

        }
    }
}

export default App;
