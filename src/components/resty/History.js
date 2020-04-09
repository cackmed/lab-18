import React from 'react';
import PropTypes from 'prop-types';


const History = ({ onSubmit }) => (
  <main>
    <h2>History</h2>
    <ul onSubmit={onSubmit}></ul>
  </main>

);

History.propTypes = {
  onSubmit: PropTypes.func.isRequired
};



export default History;
