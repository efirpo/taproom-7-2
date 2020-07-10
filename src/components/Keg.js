import React from 'react';
import PropTypes from 'prop-types';

const kegStyles = {
  margin: "2%",
}

const kegHeaderStyles = {
  fontFamily: "cursive",
  "&:hover": {
    color: "#4b78fa"
  }
}

function Keg(props) {
  return (
    <React.Fragment>

      <div style={kegStyles}>
        <h2 style={kegHeaderStyles} onClick={() => props.onKegSelect(props.id)}>{props.brew}</h2>
        <h3>Pints remaining: {props.volumeHeld}<button onClick={() => props.onDrawPint(props.id)}>-</button></h3>

      </div>
    </React.Fragment>
  )
}

Keg.propTypes = {
  brew: PropTypes.string.isRequired,
  brewer: PropTypes.string.isRequired,
  price: PropTypes.number,
  volumeHeld: PropTypes.number,
  description: PropTypes.string,
  id: PropTypes.string,
  onKegSelect: PropTypes.func,
  onDrawPint: PropTypes.func
}

export default Keg;
