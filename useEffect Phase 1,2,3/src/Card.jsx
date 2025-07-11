function Card({ id, title, body }) {
  return (
    <div className="card">
      <p><b>ID</b> : {id}</p>
      <p><b>Title</b> : {title}</p>
      <p><b>Body</b> : {body}</p>
    </div>
  )
}

export default Card

