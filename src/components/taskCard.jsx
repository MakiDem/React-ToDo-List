function TaskCard({text, key, onDelete}) {
  return (
    <div className="task-card">
      <p>{text}</p>
      <button onClick={() => {
        onDelete(key)
      }} className="delete-btn">✖</button>
  </div>
  )
}

export default TaskCard