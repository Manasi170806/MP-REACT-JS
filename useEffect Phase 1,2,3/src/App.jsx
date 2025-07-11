import { useEffect, useState } from 'react'
import Card from './Card'
import './App.css'
import axios from 'axios'

function App() {
  const [posts, setposts] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")
  const [page, setPage] = useState(1)

  const getDataFromServer = async () => {
    setLoading(true)
    try {
      const response = await axios.get(`https://jsonplaceholder.typicode.com/posts?_limit=10&_page=${page}`)
      setposts(response.data)
      setLoading(false)
    } catch (error) {
      setError(error.message)
      setLoading(false)
    }
  }

  useEffect(() => {
    getDataFromServer()
  }, [page])


  return loading ? <h1 className="loading">Loading...</h1> : error ? <h1 className="error">❌ {error}</h1> : (
    <div className="App">
      <div className="title">POSTS ARE HERE...</div>
      <hr />
      <hr style={{ width: "40%", marginLeft: "34%", border: "3px solid #F8FEFF", marginBottom: "15%" ,marginTop:"-18%"}} />
      {posts.map((el, i) => (
        <Card key={el.id} id={el.id} title={el.title} body={el.body} />
      ))}
      <button className="btn" onClick={() => setPage(page - 1)} disabled={page === 1}>PREVIOUS</button>
      <span>{page}</span>
      <button className="btn" onClick={() => setPage(page + 1)} disabled={page == posts.length}>NEXT</button>
    </div>
  )
}

export default App
