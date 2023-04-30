import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom'
import Root from './routes/root'
import Posts from './routes/Posts'
import Post from './routes/Post'
import PostsList from './routes/PostsList'
import './index.css'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: 'posts',
        element: <Posts />,
        children: [
          {
            path: '',
            element: <PostsList />
          },
          {
            path: ':postId',
            element: <Post />
          }
        ]
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
