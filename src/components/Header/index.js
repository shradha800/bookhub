import {Component} from 'react'

import {withRouter, Link} from 'react-router-dom'
import Cookies from 'js-cookie'

import './index.css'

class Header extends Component {
  onClickLogout = () => {
    const {history} = this.props

    Cookies.remove('jwt_token')
    history.replace('/login')
  }

  render() {
    return (
      <nav className="nav-bar">
        <Link to="/">
          <img
            src="https://res.cloudinary.com/dwdaqrmdg/image/upload/v1700817845/Book_hub_logo_ocuksg.png"
            alt="login website logo"
            className="header-logo"
          />
        </Link>
        <ul className="header-links-container">
          <Link to="/" className="link-decor">
            <li className="header-links"> Home </li>
          </Link>
          <Link to="/shelf" className="link-decor">
            <li className="header-links">Bookshelves</li>
          </Link>
          <button
            type="button"
            className="logout-btn"
            onClick={this.onClickLogout}
          >
            Logout
          </button>
        </ul>
      </nav>
    )
  }
}

export default withRouter(Header)
