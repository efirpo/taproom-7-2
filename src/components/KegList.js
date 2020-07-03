import React from 'react';
import PropTypes from 'prop-types';
import Keg from './Keg';



function KegList(props) {

  return (
    <React.Fragment>
      {props.kegList.map((keg) =>
        <Keg
          onKegSelect={props.OnKegSelect}
          name={keg.name}
          brewer={keg.brewer}
          price={keg.price}
          description={keg.description}
          id={keg.id}
          key={keg.id} />
      )}
    </React.Fragment>
  )
}

KegList.propTypes = {
  kegList: PropTypes.array,
  onKegSelect: PropTypes.func
}

export default KegList;