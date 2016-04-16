import React from 'react';

const Field = ({ formatter, onChange, placeholder, prefix, suffix, value }) => (
  <div className="d-field">
    { prefix }
    <input type='text' className="d-number_field" onChange={ onChange } placeholder={ placeholder } value={ formatter(value) || '' } />
    { suffix }
  </div>
);

export default Field;
