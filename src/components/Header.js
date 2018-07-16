import React, { Component } from 'react';
import { Row, Col,Container } from 'reactstrap';
import logo from '../assets/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import '../style/header.scss'
class Header extends Component {
    render() {
      return (
        <Container>
        <Row className="header">
          <Col  md={{ size: 3}} ><img src={logo} className="logo" alt="logo" /></Col>
          <Col  md={{ size: 3, offset: 6 }} style={{textAlign:'right'}}><FontAwesomeIcon icon="bars" onClick={this.props.toggleMenu.bind(this)} className="bars"/></Col>
        </Row>
      </Container>
      )
    }
}
export default Header 