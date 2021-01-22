import React, { Component } from 'react';
import slugify from 'slugify';
import Option from './Option'
import './App.css';

export default class FeatureOptions extends Component {
    render() {
        const options = this.props.features[this.props.feature].map(item => {
            const itemHash = slugify(JSON.stringify(item));
            return (
              <Option 
                  key={itemHash}
                  itemHash={itemHash}
                  feature={this.props.feature}
                  item={item}
                  updateFeature={this.props.updateFeature}
                  selected={this.props.selected}
              />
            );
          });
        return (
            <div>
                {options}

            </div>
        );
    };
};