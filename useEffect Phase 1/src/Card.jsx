function Card({ id, title, body }) {
  return (
    <div className="card">
      <p>{id}</p>
      <p>{title}</p>
      <p>{body}</p>
    </div>
  )
}

export default Card

