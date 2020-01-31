import React from 'react';
import PropTypes from 'prop-types';


const Method = ({ method, onChange, name }) => (
  <>
    <label>
      <input type="radio" name="method" value={method} onChange={onChange}></input>
      <span>{name}</span>
    </label>
  </>
);

Method.propTypes = {
  method: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired
};

export default Method;



