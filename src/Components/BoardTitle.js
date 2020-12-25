import React, {useState, useEffect} from 'react'

function BoardTitle(props) {
  const [title, setTitle] = useState('Untitled')

  useEffect(() => {
    setTitle(props.children);
  },[props.children])

  const handleClick = (e) => {
    const target = e.target;
    let div = target.parentElement
    div.classList.remove('not_editing');
    div.classList.add('is_editing');
  }

  const handleChange = (e) => {
    const target = e.target;
    // document.title = target.value;
    setTitle(target.value);
  }

  const handleSubmit = (e) => {
    if(e.keyCode === 13) {
      const BoardTitleDiv = document.querySelectorAll("."+props.className)[props.id];
      BoardTitleDiv.classList.remove('is_editing');
      BoardTitleDiv.classList.add('not_editing');
      return;
    }
  }

  return (
    <div className={props.className + " not_editing"} onClick={handleClick}>
      <h2 className={props.className+"__title" + " board__title__text"}>{title}</h2>
      <input type="text" className={props.className+"Input"} value={title} onChange={handleChange} onKeyDown={handleSubmit} autofocus />
    </div>
  )
}

export default BoardTitle
