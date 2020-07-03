import React from 'react';
import PropTypes from 'prop-types';
// import KegForm from './KegForm';

function KegDetail(props) {

  return (
    <React.Fragment>
      <h2>{props.keg.name}</h2>
      <p>Brewed by: {props.keg.brewer}</p>
      <p><em>{props.keg.description}</em></p>
      <p>Price per draught: <strong>{props.keg.price} gp</strong></p>
      <br /><br /><hr />
      <button onClick={props.onClickingEdit}>Edit this Brew</button>
      {props.editKegForm}

    </React.Fragment>
  )

}
KegDetail.propTypes = {
  keg: PropTypes.object,
  onClickingEdit: PropTypes.func,
  onClickingDelete: PropTypes.func,
  editFormVisible: PropTypes.bool,
}
export default KegDetail;