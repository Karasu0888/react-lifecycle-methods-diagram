import React, { Component } from 'react';
import PropTypes from 'prop-types';
import mergeClassNames from 'merge-class-names';

import './Arrow.less';

export default class Arrow extends Component {
  static propTypes = {
    col: PropTypes.number.isRequired,
    from: PropTypes.number.isRequired,
    solid: PropTypes.bool,
    to: PropTypes.number.isRequired,
    withAlt: PropTypes.bool,
  };

  render() {
    const {
      col, from, solid, to, withAlt,
    } = this.props;

    return (
      <div
        className={mergeClassNames('Arrow', solid && 'Arrow--solid', withAlt && 'Arrow--withAlt')}
        style={{
          gridColumn: col + 1,
          gridRow: `${((from * 3) + 2 + 3)} / ${((to * 3) + 2 + 1)}`,
        }}
      />
    );
  }
}
