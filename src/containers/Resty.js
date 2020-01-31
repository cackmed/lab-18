import React, { Component } from 'react';
import Form from '../components/resty/Form';
import Display from '../components/resty/Display';
import History from '../components/resty/History';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default class Resty extends Component {

  render() {
    return (
      <>
        <Header />
        <Form />
        <Display />
        <History />
        <Footer />
      </>
    );
  }
}
