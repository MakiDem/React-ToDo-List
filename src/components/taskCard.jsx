function TaskCard({text, id, onDelete}) {
  return (
    <div className="task-card">
      <p>{text}</p>
      <button onClick={() => {
        onDelete(id)
      }} className="delete-btn">✖</button>
  </div>
  )
}

export default TaskCard