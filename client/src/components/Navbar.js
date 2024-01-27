import { Link } from 'react-router-dom'
import Button from './Button'

function Navbar() {
  return (
    <div className='navbar'>
      <nav>
        <div>
          <span>Savory Secrets</span>
        </div>
        <div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/discover">Discover</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </div>
        <div>
          <Button />
        </div>
      </nav>
    </div>
  )
}

export default Navbar