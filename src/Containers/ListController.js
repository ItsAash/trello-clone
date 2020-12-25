import React from 'react'
import BoardHeader from '../Components/BoardHeader.js'

import List from '../Components/List'

class ListController extends React.Component{
  constructor(props) {
    super(props);
    this.state ={
      lists: []
    }
    this.handleBoardAdd = this.handleBoardAdd.bind(this);
    this.handleDeleteList = this.handleDeleteList.bind(this);

  }

  handleBoardAdd(){
    const prevList = this.state.lists;
    prevList.push({name: "Untitled", id: this.state.lists.length});
    this.setState({lists: prevList});
  }

  handleDeleteList (id) {
    const prevList = this.state.lists;
    prevList.splice(id, 1);
    this.setState({lists: prevList})
  }

  render () {
    return (
      <div className="BoardController">
        <BoardHeader handleBoardAdd={this.handleBoardAdd} />
        <div className="ListConatainer">
          {this.state.lists.map((list, i) => {
            return <List list={list} key={list.id} deleteList={this.handleDeleteList} />
          })}
        </div>
      </div>
    )
  }
}

export default ListController
