import "../styles/ListHeader.css"
import { useEffect } from 'react'



const ListHeader = () => {



  return (
    <div className="ListHeader">
      <div className="lh-title">TodoApp</div>
      <div className="lh-buttons-container">
        <button>Add Task</button>
        <button>Remove Task</button>
      </div>
    </div>
  )
}

export default ListHeader