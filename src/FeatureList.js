import React, { Component } from 'react';
import slugify from 'slugify';
import OptionItem from './OptionItem';
import FeatureItem from './FeatureItem';



class FeatureList extends Component {
    render() {
        const features = Object.keys(this.props.features).map((feature, idx) => {
            const featureHash = feature + '-' + idx;

            const options = this.props.features[feature].map(item => {
              const itemHash = slugify(JSON.stringify(item));

              return (
                <OptionItem
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
              <FeatureItem 
                key={featureHash}
                featureHash={featureHash}
                feature={feature}
                options={options}
                />
            );
          });
       
        return(
            <form className="main__form">
                <h2>Customize your laptop</h2>
                {features}
            </form>
        )
    };
};
export default FeatureList;