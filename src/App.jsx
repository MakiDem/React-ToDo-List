import './App.css'
import {useState, useEffect} from 'react'
import TaskCard from './components/taskCard.jsx'

function App() {
  const [task, setTask] = useState("")
  const [tasks, setTasks] = useState([])

  useEffect(() => {
    const tasks = localStorage.getItem('tasks')
    if (tasks) setTasks(JSON.parse(tasks))
    console.log(tasks)
  }, [])

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks))
    console.log(tasks)
  }, [tasks])

  const addTask = (e) => {
    e.preventDefault()

    if (task.trim()) setTasks([...tasks, task])
      setTask('')
  }

  const deleteTask = (id) => {
    const newTasks = tasks.filter(task => {
      task.id !== id
    })
    setTasks(newTasks)
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
        {tasks.map((task, i) => (
          <TaskCard key={i} text={task} onDelete={deleteTask}/>
        ))}
      </div>
    </div>
  )
}

export default App
