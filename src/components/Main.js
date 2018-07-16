import React, { Component } from 'react';
import { Container,Row,Col} from 'reactstrap';
import DragSortableList from 'react-drag-sortable'
import '../style/main.scss'
class Main extends Component {
  removeItem = () => console.log(111)
  render() {
      let onSort = function(sortedList, dropEvent) {
        console.log("sortedList", sortedList, dropEvent);
     }
     let placeholder = (
      <div className="placeholderContent">הנח כאן</div>
  );
  
      return (
        <Container>
          <Row className="main">
            <DragSortableList items={this.props.itemList} 
              placeholder={placeholder} onSort={onSort} 
              dropBackTransitionDuration={0.3} type="grid"
            />
          </Row>
        </Container>
      )
    }
}
export default Main 