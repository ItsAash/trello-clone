import React, {useState, useEffect} from 'react';
import BoardTitle from './BoardTitle';
import AddBoardBtn from './AddBoardBtn';

function BoardHeader(props) {
  const [boardName, setBoardName] = useState("Untitled");

  useEffect(()=>{
    let boardNextName = props.boardName || "Untitled";
    setBoardName(boardNextName);
  }, [props.boardName])

  return (
    <div className="BoardHeader">
      <div className="board__flexbox">
        <BoardTitle id={0} className={"BoardTitle"}>{boardName}</BoardTitle>
        <AddBoardBtn onClick={props.handleBoardAdd} />
      </div>
    </div>
  )
}

export default BoardHeader
