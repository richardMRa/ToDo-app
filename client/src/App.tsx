import { useState, useEffect } from 'react'
import axios from 'axios'
import './styles/App.css'
import ListHeader from './components/ListHeader'
const App = () => {

  type User = {
    id: number,
    progress: number,
    title: string,
    user_email: string
  }

  type GetUsersData = {
    data: User[]
  }

  const getData = async () => {
    try {
      const { data } = await axios.get<GetUsersData>('http://localhost:8000/todos')
      console.log(data)
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
    getData()
  }, [])

  return (
    <div className="App">
      <ListHeader></ListHeader>
    </div>
  )
}

export default App
