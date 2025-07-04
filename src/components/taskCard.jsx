function TaskCard({text}) {
  return (
    <div className="task-card">
      <p>{text}</p>
      <button className="delete-btn">✖</button>
  </div>
  )
}

export default TaskCard