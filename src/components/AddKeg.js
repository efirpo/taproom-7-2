import React from 'react';
import PropTypes from 'prop-types';
import { v4 } from 'uuid';
import KegForm from './KegForm';

function AddKeg(props) {

  function handleNewKegFormSubmission(event) {
    event.preventDefault();
    props.onNewKegCreation({ brew: event.target.brew.value, brewer: event.target.brewer.value, price: event.target.price.value, description: event.target.description.value, id: v4(), volumeHeld: 124 })
  }
  return (
    <React.Fragment>
      <KegForm submitHandler={handleNewKegFormSubmission} buttonText="Add Keg to Stock" />
    </React.Fragment>
  )
}

AddKeg.propTypes = {
  onNewKegCreation: PropTypes.func
}

export default AddKeg;