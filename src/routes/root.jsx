import { Link, Outlet } from 'react-router-dom'

export default function Root() {
  return (
    <div style={{
      display: 'flex',
      minHeight: '100vh'
    }}>
      <div style={{
        minWidth: '300px',
        minHeight: '100%',
        borderRight: '1px solid black'
      }}>
        <Link to={'/posts'}>Go to Posts</Link>
      </div>
      <div>
        <header>Hello!</header>
        <div style={{
          padding: '6px'
        }}>
          <Outlet />
        </div>
      </div>
    </div>
  )
}