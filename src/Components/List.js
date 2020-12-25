import React, { Component } from 'react';

import BoardTitle from './BoardTitle';
import Card from './Card'

import AddIcon from '@material-ui/icons/Add';
import DeleteIcon from '@material-ui/icons/Delete';

export class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: this.props.list.name,
      cards: [],
    }

    this.handleDelete = this.handleDelete.bind(this);
    this.handleCardSubmit = this.handleCardSubmit.bind(this);
    this.handleDeleteCard = this.handleDeleteCard.bind(this);
  }

  handleDelete(e) {
    const id = e.target.parentElement.parentElement.parentElement.dataset.id;
    this.props.deleteList(+id)                                                                                                               
  }

  handleCardSubmit(e) {
    e.preventDefault();
    const target = e.target;
    let name = target[0].value;

    if(name === '' || name === undefined) {
      name = "Untitled";
    }

    target[0].value = '';

    const prevCards = this.state.cards;
    prevCards.push({name: name, id: this.state.cards.length});

    this.setState({cards: prevCards});
  }

  handleDeleteCard(id) {
    const prevCards = this.state.cards;
    prevCards.splice(id, 1);
    this.setState({
      cards: prevCards
    })
  }

  render() {
    return (
      <div className="list card__container" data-id={this.props.list.id}>
        <div className="list__header">
          <BoardTitle className="list__title" id={this.props.list.id} >{this.state.title}</BoardTitle>
          <DeleteIcon className="DeleteIcon" onClick={this.handleDelete} />
        </div>
        <form className="list__card__form" action="#" onSubmit={this.handleCardSubmit} >
          <input placeholder="Card Name" className="add__card__input" />
          <button className="add__card__btn" type="submit"><AddIcon /></button>
        </form>
        <div className="cards__here">
          {
            this.state.cards.map((card, i) => {
              return <Card key={i} id={i} card={card} deleteCard={this.handleDeleteCard} />
            })
          }
        </div>
      </div>
    )
  }
}

export default List
