import React from 'react';
import PropTypes from 'prop-types';

import Section from './Section';
import Method from './Method';
import Arrow from './Arrow';

const Unmounting = ({ advanced }) => (
  <Section
    advanced={advanced}
    name={'Un\u00admounting'}
    col={5}
  >
    <Arrow />
    <Method
      main
      name="componentWillUnmount"
      docname="componentwillunmount"
      type="commit"
      row={advanced ? 7 : 4}
    />
  </Section>
);

Unmounting.propTypes = {
  advanced: PropTypes.bool,
};

export default Unmounting;
