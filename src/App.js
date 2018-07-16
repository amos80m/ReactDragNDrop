import React, { Component } from 'react';
import { Container, Col} from 'reactstrap';

import './App.scss';

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStroopwafel, faImage, faKeyboard,faTrashAlt, faFileAlt, faLink, faBars } from '@fortawesome/free-solid-svg-icons'
import Items from './components/Common/Items'


import Header from './components/Header'
import Main from './components/Main'
import SideMenu from './components/SideMenu'
library.add(faStroopwafel,faImage,faKeyboard, faFileAlt, faLink, faBars,faTrashAlt)
class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      menueOpen:false,
      menuClassName:'menueClose',
      itemList:[]
    }
  }

  toggleMenu = () => {
    let menuClassName = this.state.menueOpen ? 'menueClose' : 'menueOpen';
    this.setState({menueOpen:!this.state.menueOpen,menuClassName})
  }
  removeItem = (i) => {
    let temp = this.state.itemList,
        itemToDelet = temp.find(x => x.id === String(i)),
        place = temp.indexOf(itemToDelet);
    debugger
    temp.splice(place,1)
    this.setState({itemList:temp})
  }

  addThisItemToDashboard = (type,i) => {
      let temp = this.state.itemList;
      let x = temp.length + 1
      temp.push({content: (<Items type={type} itemNum={x} removeItem={this.removeItem} onClick={()=>this.removeItem.bind(this,x)} />), classes:['box']})
      this.setState({itemList:temp})
  }



  render() {
    return (
      <div>
        <Header toggleMenu={this.toggleMenu}/>        
        <Container className="App">
          <SideMenu menueOpen={this.state.menuClassName} addButtonFunc={this.addThisItemToDashboard} />
          <Main itemList={this.state.itemList}/>
        </Container>
      </div>
      
    );
  }
}

export default App;
