import React, { Component } from 'react';
import slugify from 'slugify';
import Option from './Option'
import './App.css';

const USCurrencyFormat = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  });

export default class FeatureOptions extends Component {
    render() {
        return (
            <div></div>
        )
    }

}