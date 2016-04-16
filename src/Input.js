import React from 'react';
import { connect } from 'react-redux';

import Field from './components/Field';
import { updateInput } from './actions/input';

const Input = ({ id, inputs, formatter, label, onInput, placeholder, prefix, suffix }) => {
  const input = inputs[id] || { value: 0 };
  return (
    <div className="d-input">
      <label className="d-input__label">{ label }</label>
      <Field
         formatter={ formatter }
         onChange={ onInput.bind(undefined, id) }
         placeholder={ placeholder }
         prefix={ prefix } suffix={ suffix }
         value={ input.value }
      />

    </div>
  );
};

function mapStateToProps(state) {
  const { inputs } = state;
  return {
    inputs
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onInput: (key, e) => {
      e.preventDefault();
      dispatch(updateInput(key, e.target.value));
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Input);
