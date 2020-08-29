import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

const Header = (props) => (
    <header id="header" className="alt">
        <Link to="/" className="logo"><strong>Pitt-Hub</strong> <span>A Hub of D4BL</span></Link>

        <div className="navbar-end ">
              <Link className="logo" to="/about">
                About
              </Link>
              <Link className="logo" to="/products">
                On-Boarding
              </Link>
              <Link className="logo" to="/blog">
                Testismonial
              </Link>
              <Link className="logo" to="/contact">
                Eduactional kit
              </Link>
              <Link className="logo" to="/contact">
                Form 
              </Link>
        </div>



    </header>
)

Header.propTypes = {
    onToggleMenu: PropTypes.func
}

export default Header
