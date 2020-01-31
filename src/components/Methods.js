import React from 'react';
import PropTypes from 'prop-types';


const Method = ({ method, onChange, label, name  }) => (
  <>
    <label>
      <input type="radio" name={name} value={method} onChange={onChange}></input>
      <span>{label}</span>
    </label>
  </>
);

Method.propTypes = {
  method: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
};

export default Method;



