import React, { Component } from 'react';
import slugify from 'slugify';
import FeatureOptions from './FeatureOptions'
import Option from './Option'
import './App.css';

const USCurrencyFormat = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  });

export default class Customizations extends Component {

    render() {
        const features = Object.keys(this.props.features).map((feature, idx) => {
            const featureHash = feature + '-' + idx;
            const options = this.props.features[feature].map(item => {
              const itemHash = slugify(JSON.stringify(item));
              return (
                <Option 
                    key={itemHash}
                    itemHash={itemHash}
                    feature={feature}
                    item={item}
                    updateFeature={this.props.updateFeature}
                    selected={this.props.selected}
                />
              );
            });
      
            return (
              <fieldset className="feature" key={featureHash}>
                <legend className="feature__name">
                  <h3>{feature}</h3>
                </legend>
                {options}
              </fieldset>
            );
          });
        return (
            <div>{features}</div>
        )
    }
}
