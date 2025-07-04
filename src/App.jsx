import './App.css'

function App() {

  return (
    <div className="todo-container">
      <h1>My Tasks</h1>

      <form className="task-form">
        <input type="text" placeholder="Add a new task..." />
        <button type="submit">Add</button>
      </form>

      <div className="task-list">
        <div className="task-card">
          <p>📝 Finish React project</p>
          <button className="delete-btn">✖</button>
        </div>
      </div>
    </div>
  )
}

export default App
