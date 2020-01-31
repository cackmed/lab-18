import React from 'react';
import PropTypes from 'prop-types';

const History = ({ onSubmit }) => (
  <>
    <h2>History</h2>
    <ul onSubmit={onSubmit}></ul>
  </>

);

History.propTypes = {
  onSubmit: PropTypes.func.isRequired
};



export default History;
