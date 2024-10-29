import { Button } from '@radix-ui/themes'
import { Link } from 'react-router-dom'
// import Button from './hx'

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
          <Button>
            Log In
          </Button>
          {/* <Button value="Log In" /> */}
        </div>
      </nav>
      <hr />
    </div>
  )
}

export default Navbar