import React from 'react'
import "./Header.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping, faBars, faCircleUser, faLocationDot, faCaretDown, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'


const Header = () => {
  return (
    <header className='main-header'>
        {/* Logo Section */}
        <div className="logo-header">
            <h4>dropshoptail</h4>
        </div>

        {/* Searchbar Section */}
        <div className="searchbar-header">
          <div className="search-location">
            <FontAwesomeIcon icon={faLocationDot} style={{color: "#ce1212",}} id='locationDot'/>
            <input type="text" placeholder='Enter your location' className='location-header'/>
            <FontAwesomeIcon icon={faCaretDown} style={{color: "#39d05f",}} id='darrow'/>
          </div>
          <div className="vertical-bar"></div>
          <div className="query-search">
            <FontAwesomeIcon icon={faMagnifyingGlass} style={{color: "#36ce64",}} id='query-icon'/>
            <input type='text' placeholder='Search for retail or product name' className='query-field'/>
          </div>
        </div>

        {/* User Handle Section */}
        <div className="userhandle-header">
          <div className="cart-header">
            <FontAwesomeIcon icon={faCartShopping} style={{color: "#77bb3f",}} id='logo' />
          </div>
          <div className="user-access">
            <FontAwesomeIcon icon={faCircleUser} style={{color: "#4fabb5",}} />
            <FontAwesomeIcon icon={faBars} style={{color: "#4fabb5",}} />
          </div>
        </div>
    </header>
  )
}

export default Header
