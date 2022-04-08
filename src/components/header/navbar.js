import React from 'react';

function NavBar(props) {

  const navBar = (
    <ul className='header__list__items'>
      {props.headerLinks.map((link) =>
        <li key={link.id} className='header__item__link'>
          {link.title}
        </li>
      )}
    </ul>
  )

  return (
    <div className='header__content'>{navBar}</div>
  )
}

export default NavBar;