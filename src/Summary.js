import React, { Component } from 'react';
import Selections from './Selections';
import Total from './Total'
import './App.css';

export default class Summary extends Component {
    render() {
        return (
            <div>
                <section className="main__summary">
                <h2>Your cart</h2>
                    <Selections selected={this.props.selected}/>
                    <Total selected={this.props.selected}/>
                </section>   
            </div>
        );
    };
};
