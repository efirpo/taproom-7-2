import React from 'react';
import PropTypes from 'prop-types';

function Keg(props) {
  return (
    <React.Fragment>
      <div onClick={() => props.onKegSelect(props.id)}>
        <h2>{props.name}</h2>
        <h3>Pints remaining: {props.volumeHeld}<button onClick={() => props.onDrawPint(props.id)}>+</button></h3>
      </div>
    </React.Fragment>
  )
}

Keg.propTypes = {
  name: PropTypes.string.isRequired,
  brewer: PropTypes.string.isRequired,
  price: PropTypes.number,
  description: PropTypes.string,
  id: PropTypes.string,
  onKegSelect: PropTypes.func,
  onDrawPint: PropTypes.func
}

export default Keg;
