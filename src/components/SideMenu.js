import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../style/sideMenu.scss'
const menuDAta = [
  {
    name:'תמונה',
    icon:'image',
    type:'0'
  },
  {
    name:'מאמר',
    icon:'file-alt',
    type:'1'
  },
  {
    name:'כפתור',
    icon:'link',
    type:'2'
  },
  {
    name:'טופס',
    icon:'keyboard',
    type:'3'
  }
]

class SideMenu extends Component {
  
  _renderAddIcons = () => {
    return menuDAta.map((_,i)=> {
      return <div className="iconHolder" key={i}  onClick={this.props.addButtonFunc.bind(this,_.type,i)}>
              <h2><FontAwesomeIcon icon={_.icon} size={45}/> {_.name}</h2>
            </div>
    })
  }

    render() {
      return (
        <div className={`${this.props.menueOpen} menu`}>
          {this._renderAddIcons()}
        </div>
      )
    }
}
export default SideMenu 