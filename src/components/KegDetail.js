import React from 'react';
import PropTypes from 'prop-types';
import KegForm from './KegForm';

class KegDetail extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      viewKegForm: false,
      deleteKegPrompt: false
    }
  }
  handleEditFormSubmission = (event) => {
    event.preventDefault();
    this.props.onEditSubmit({
      brew: event.target.brew.value, brewer: event.target.brewer.value, description: event.target.description.value, price: event.target.price.value, id: this.props.keg.id
    })

  }
  onClickingToEdit = () => {
    this.setState({
      viewKegForm: !this.state.viewKegForm
    })
  }

  onClickingToDelete = () => {
    this.setState({
      deleteKegPrompt: !this.state.deleteKegPrompt
    })
  }

  render() {
    let deleteKegYouSure = false;
    let editKegForm = null;

    if (this.state.viewKegForm) {
      editKegForm = <KegForm submitHandler={this.handleEditFormSubmission} buttonText="Submit edits." />
    }
    if (this.state.deleteKegPrompt) {
      deleteKegYouSure = <h2 onClick={() => this.props.onClickingDelete(this.props.keg.id)}>Are you sure? This action cannot be undone. Click here to delete.</h2>
    }

    return (
      <React.Fragment>
        <h2>{this.props.keg.brew}</h2>
        <p>Brewed by: {this.props.keg.brewer}</p>
        <p><em>{this.props.keg.description}</em></p>
        <p>Price per draught: <strong>{this.props.keg.price} gp</strong></p>
        <br /><br /><hr />
        <button onClick={this.onClickingToEdit}>Edit this Brew.</button>
        {editKegForm}
        <button onClick={this.onClickingToDelete}>Delete this Brew.</button>
        {deleteKegYouSure}

      </React.Fragment>
    )
  }

}
KegDetail.propTypes = {
  keg: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onEditSubmit: PropTypes.func
}
export default KegDetail;