import React from 'react';
import PropTypes from 'prop-types';

function KegForm(props) {

  return (
    <React.Fragment>
      <form onSubmit={props.submitHandler}>
        <input
          type='text'
          name='brew'
          placeholder='Potion Name' /><br />
        <input
          type='text'
          name='brewer'
          placeholder='Brewer of Potion' /><br />
        <input
          type='number'
          name='price'
          placeholder='Cost per draught' /><br />
        <textarea
          name='description'
          placeholder='Describe effects of yon brew' /><br />
        <button type='submit'>{props.buttonText}</button>
      </form>
    </React.Fragment>
  )
}

KegForm.propTypes = {
  submitHandler: PropTypes.func,
  buttonText: PropTypes.string,
  keg: PropTypes.object
}

export default KegForm;