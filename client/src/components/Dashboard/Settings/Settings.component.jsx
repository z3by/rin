import React, { Component } from 'react'
import AccordionComponent from '../../general-components/Accordion/Accordion.component';
import { Route } from 'react-router-dom'


export default class Settings extends Component {
  render() {
    return (
      <div className="container">
        <AccordionComponent></AccordionComponent>
      </div>
    )
  }
}
