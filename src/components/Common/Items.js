import React, { Component } from 'react';
import { Col, Button,Form, FormGroup, Label, Input } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../../style/items.scss'
import sample from '../../assets/sample.jpg'
class Items extends Component {
  
  _renderItems = () => {
    switch (this.props.type) {
      case '0':
        return <Col md="3" className="item">
        <img src={sample} className="itemImg" alt="logo" />
        <span onClick={this.props.removeItem.bind(this,this.props.itemNum)}><FontAwesomeIcon icon="trash-alt"/></span></Col>
        break;
      case '1':
      return <Col md="3" className="item">
      <h5>מאמר בנושא:</h5>
      <p>ורם איפסום סיטאמאונט...</p>
      <p>ורם איפסום סיטאמאונט...</p>
      <p>ורם איפסום סיטאמאונט...</p>
      <span onClick={this.props.removeItem.bind(this,this.props.itemNum)}><FontAwesomeIcon icon="trash-alt"/></span></Col>
        break;
      case '2':
      return <Col md="3" className="item"><Button color="primary">Click Me</Button><span onClick={this.props.removeItem.bind(this,this.props.itemNum)}><FontAwesomeIcon icon="trash-alt"/></span></Col>
        break;
      case '3':
      return <Col md="3" className="item"><Form>
      <FormGroup>
        <Label for="exampleEmail">Email</Label>
        <Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder" />
      </FormGroup>
      <FormGroup>
        <Label for="examplePassword">Password</Label>
        <Input type="password" name="password" id="examplePassword" placeholder="password placeholder" />
      </FormGroup>
      <Button color="primary">שלח</Button>
        </Form><span onClick={this.props.removeItem.bind(this,this.props.itemNum)}><FontAwesomeIcon icon="trash-alt"/></span></Col>
        break;
      default:
        return <Col md="3" className="item"><h1>Somthing else...</h1><span onClick={this.props.removeItem.bind(this,this.props.itemNum)}><FontAwesomeIcon icon="trash-alt"/></span></Col>
        break;
    }
  }
    render() {
      return this._renderItems()
    }
}
export default Items 