import './App.css'
import {useState} from 'react'
import TaskCard from './components/taskCard.jsx'

function App() {
  const [task, setTask] = useState("")
  const [tasks, setTasks] = useState([])

  const addTask = (e) => {
    e.preventDefault()
    
    if (task.trim()) setTasks([...tasks, task])
      setTask('')
  }

  return (
    <div className="todo-container">
      <h1>My Tasks</h1>

      <form onSubmit={addTask} className="task-form">
        <input onChange={(e) => {
          const input = e.target.value
          setTask(input)
        }} type="text" placeholder="Add a new task..." value={task}/>
        <button type="submit">Add</button>
      </form>

      <div className="task-list">
        {tasks.map(task => (
          <TaskCard text={task}/>
        ))}
      </div>
    </div>
  )
}

export default App
