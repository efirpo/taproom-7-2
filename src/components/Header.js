import React from 'react';
import header from '../img/header.png'

const headerStyles = {
  backgroundColor: "#ccd8ff"
}
function Header() {
  return (
    <div style={headerStyles}>
      <img src={header} alt="header image" />
    </div>
  )
}

export default Header