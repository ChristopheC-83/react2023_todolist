/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import {TiDelete} from "react-icons/ti"

function ListItem({itemData, deleteToDo}) {
  return (
    <div className="listItem">
      <span>{itemData.content}</span>
      <button onClick={()=>deleteToDo(itemData.id)}>X</button>
    </div>
  )
}

export default ListItem
