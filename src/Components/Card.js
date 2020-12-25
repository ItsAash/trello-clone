import React,{ useState } from 'react';

import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';

function Card(props) {
  const [name, setName] = useState(props.card.name);
  const [card, setCard] = useState(props)

  const deleteCard = (e) => {
    const target = e.target;
    const card = target.parentElement.parentElement
    const id = card.dataset.id;
    props.deleteCard(id);
  }

  return (
    <div className="card__" data-id={card.id}>
      <span className="card__title">{name}</span>
      <EditIcon className="card__edit__btn"/>
      <DeleteIcon className="deleteCard__btn" onClick={deleteCard} />
    </div>
  )
}

export default Card

