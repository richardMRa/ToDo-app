import { ListItemProps } from "../Types"
import '../styles/ListItem.css'

const ListItem = ({ task }: ListItemProps) => {


  return (
    <li className="ListItem">
      <div className="li-task-title">
        {task.title}
      </div>
      <div className="li-button-container">
        <button className="app-button li-edit">Edit</button>
        <button className="app-button li-delete">Delete</button>
      </div>
    </li>
  )
}

export default ListItem