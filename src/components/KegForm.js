import React from 'react';
import PropTypes from 'prop-types';

function KegForm(props) {

  return (
    <React.Fragment>
      <form onSubmit={props.submitHandler}>
        <input
          type='text'
          name='name'
          placeholder='Potion Name' />
        <input
          type='text'
          name='brewer'
          placeholder='Brewer of Potion' />
        <input
          type='number'
          name='price'
          placeholder='Cost per draught' />
        <textarea
          name='description'
          placeholder='Describe effects of yon brew' />
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