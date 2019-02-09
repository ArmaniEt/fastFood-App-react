import React, {Component} from 'react';
import './App.css';
import {Container, Row, Col} from 'reactstrap';
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

// split to components: *
// Menu, OrderForm, Food, CheckStrings *

// state in the app without constructor *
// add, delete food (one common method) *
// write checker method for check count in our state to show layout

class App extends Component {
    render() {
        return (
            <div className="App">
                <Container>
                    <Row>
                        <Col xs={5}>
                            <OrderForm
                                empty={this.state.isEmpty}
                                total={this.getTotal}
                                count={this.getQuantity}
                            />
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
        foods: {
            hamburger: {count: 0, total: 0},
            coffee: {count: 0, total: 0},
            cheeseburger: {count: 0, total: 0},
            tea: {count: 0, total: 0},
            fries: {count: 0, total: 0},
            cola: {count: 0, total: 0}

        },
        isEmpty: true
    };

    foodChanger = (name, event) => {
        let food = {...this.state.foods[name]};
        let price = AVAILABLE_FOOD.find(item => item.name === name).price;
        if (event.target.value === 'add') {
            food.count += 1;

        } else {
            food.count -= 1;
        }

        food.total = food.count * price;

        let foods = {...this.state.foods};
        foods[name] = food;
        let state = {...this.state};
        state.foods = foods;

        this.setState(state);
    };

    getTotal = () => {
        let total = 0;
        let keys = Object.keys(this.state.foods);
        let counter = 0;


        while (counter < keys.length) {
            total += this.state.foods[keys[counter]].total;
            counter++;
        }
        return total;

    };

    getQuantity = (name) => {
        return this.state.foods[name].count;

    };



}

export default App;
