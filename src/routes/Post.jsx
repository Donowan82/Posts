import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

export default function Post() {
  const [post, setPost] = useState(null)
  const [user, setUser] = useState(null)
  let { postId } = useParams()

  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}`)
      .then(response => {
        setPost(response.data)
      })
  }, [])

  useEffect(() => {
    if (!!post) {
      axios.get(`https://jsonplaceholder.typicode.com/users/${post.userId}`)
        .then(response => {
          setUser(response.data)
        })
    }
  }, [post])

  return (
    <div>
      <h4>{post?.title}</h4>
      <p>{post?.body}</p>
      <div>Created by: {user?.name}</div>
    </div>
  )
}