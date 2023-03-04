import { useState, useEffect } from 'react'
import axios from 'axios'
import './styles/App.css'
import ListHeader from './components/ListHeader'
import ListItem from './components/ListItem'
import { GetTodos } from './Types'
//Types


const App = () => {

  const [tasks, setTasks] = useState<GetTodos["todos"] | null>(null)

  const getTodos = async () => {
    try {
      const { data } = await axios.get<GetTodos["todos"]>('http://localhost:8000/todos')
      setTasks(data)
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.log('error message: ', error.message);
        return error.message;
      } else {
        console.log('unexpected error: ', error);
        return 'An unexpected error has occurred';
      }
    }
  }

  useEffect(() => {
    tasks ?? (
      getTodos()
    )

  }, [])

  //Sort tasks by date
  const sortedTasks = tasks?.sort((a, b) => (new Date(a.date)).getTime() - (new Date(b.date)).getTime())

  return (
    <div className="App">
      <ListHeader />
      {sortedTasks?.map((task) => {
        return (
          <div className='li-container'>
            <ListItem key={task.id} task={task} />
            <ListItem key={task.id} task={task} />
            <ListItem key={task.id} task={task} />
          </div>
        )
      })}
    </div>
  )
}

export default App
