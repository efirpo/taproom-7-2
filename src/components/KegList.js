import React from 'react';
import PropTypes from 'prop-types';
import Keg from './Keg';



function KegList(props) {

  return (
    <React.Fragment>
      {props.kegList.map((keg) =>
        <Keg
          onKegSelect={props.onKegSelect}
          onDrawPint={props.onDrawPint}
          brew={keg.brew}
          brewer={keg.brewer}
          price={keg.price}
          description={keg.description}
          volumeHeld={keg.volumeHeld}
          id={keg.id}
          key={keg.id} />
      )}
    </React.Fragment>
  )
}

KegList.propTypes = {
  kegList: PropTypes.array,
  onKegSelect: PropTypes.func,
  onDrawPint: PropTypes.func
}

export default KegList;