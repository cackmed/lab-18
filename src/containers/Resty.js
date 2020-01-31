import React, { Component } from 'react';
import Form from '../components/resty/Form';
import Display from '../components/resty/Display';
import History from '../components/resty/History';
import Header from '../components/Header';
import Footer from '../components/Footer';


export default class Resty extends Component {
  state = {

  }
handleChange = () => {
  console.log('Work in progress');
}
handleSubmit = () => {
  console.log('Still in devolopment');
}


render() {
  return (
    <>
      <Header />
      <Form onChange={this.handleChange} onSubmit={this.handleSubmit} />
      <Display />
      <History onSubmit={this.handleSubmit}/>
      <Footer />
    </>
  );
}
}
