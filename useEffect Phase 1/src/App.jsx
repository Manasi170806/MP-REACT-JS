import { useEffect, useState } from 'react'
import Card from './Card'
import './App.css'
import axios from 'axios'

function App() {
  const [posts, setposts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const getDataFromServer = async () => {
    try {
      const response = await axios.get("https://jsonplaceholder.typicode.com/posts")
      setposts(response.data)
      setLoading(false)
    } catch (error) {
      setError("Data Not Found!")
    }
  }

  useEffect(() => {
    getDataFromServer()
  }, [])


  return (
    <div className="App">
      <h1>Posts</h1>
      <hr />
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}

      {posts.map((el, i) => (
        <Card key={el.id} id={el.id} title={el.title} body={el.body} />
      ))}
    </div>
  )
}

export default App
