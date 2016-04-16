import assign from 'object-assign';
import { reduce, toNumber } from 'lodash';
import React from 'react';
import { connect } from 'react-redux';

const Sheet = ({ formula, inputs }) => (
  <div className="d-sheet">
    { formula(inputs) }
  </div>
);

function mapStateToProps(state) {
  const { inputs } = state;
  return {
    inputs: reduce(inputs, (output, o, key) => {
      return assign({}, output, { [key]: toNumber(o.value) });
    }, {})
  };
}

export default connect(mapStateToProps)(Sheet);
