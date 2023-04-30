import { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

export default function PostsList() {
  const [posts, setPosts] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(response => {
        setPosts(response.data)
      })
  }, [])

  const handleClick = (id) => {
    navigate(`/posts/${id}`)
  }

  return (
    <div>
      {posts.map(post => (
        <div
          key={post.id}
          style={{
            border: '1px solid black',
            marginBottom: '6px',
            padding: '6px',
            boxShadow: '3px 2px 3px',
            cursor: 'pointer'
          }}
          onClick={() => handleClick(post.id)}
        >
          <h5>{post.title}</h5>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  )
}