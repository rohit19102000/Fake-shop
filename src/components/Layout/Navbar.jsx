import { Link } from 'react-router-dom';
import PropTypes from 'prop-types'

export default function Navbar({ title }) {
  return (
    <nav className="navbar mb-12 shadow-lg bg-neutral text-neutral-content">
      <div className="container mx-auto">
      <Link to="/" className="text-lg font-bold align-middle">
     {title}
      </Link>
      </div>
      <div className="flex-1 px-2 mx-2">
        <div className="flex justify-end">
          <Link to="/" className="btn btn-ghost btn-sm rounded-btn">
            home
          </Link>
          <Link to="/about" className="btn btn-ghost btn-sm rounded-btn">
            about
          </Link>
        </div>
      </div>
      </nav>
  )
}
Navbar.defaultProps ={
  title:' FakeShop'
}

Navbar.propTypes= {
  title: PropTypes.string,
}