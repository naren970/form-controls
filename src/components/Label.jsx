/* eslint-disable react/prefer-stateless-function */
/* Needs this to attach refs as they cannot be attached to stateless functions. */

import React, { Component, PropTypes } from 'react';
import ComponentStore from 'src/helpers/componentStore';


export class Label extends Component {
  render() {
    const disableClass = this.props.enabled ? '' : 'disabled-label';
    return (<label
      className={`${disableClass}`}
    >
      {this.props.metadata.value}
    </label>);
  }
}

Label.propTypes = {
  enabled: PropTypes.bool,
  hidden: PropTypes.bool,
  metadata: PropTypes.shape({
    type: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
  }),
};

Label.defaultProps = {
  hidden: false,
  enabled: true,
};

ComponentStore.registerComponent('label', Label);
/* eslint-enable react/prefer-stateless-function */
