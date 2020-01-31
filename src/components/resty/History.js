import React from 'react';
import PropTypes from 'prop-types';
import styles from './History.css';


const History = ({ onSubmit }) => (
  <main className={styles.History}>
    <h2>History</h2>
    <ul onSubmit={onSubmit}></ul>
  </main>

);

History.propTypes = {
  onSubmit: PropTypes.func.isRequired
};



export default History;
