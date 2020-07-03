import React from 'react';
import PropTypes from 'prop-types';
import KegForm from './KegForm';

class KegDetail extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      viewKegForm: false
    }
  }
  handleEditFormSubmission = (event) => {
    event.preventDefault();
    this.props.onEditSubmit({
      name: event.target.name.value, brewer: event.target.brewer.value, description: event.target.description.value, price: event.target.price.value, id: this.props.keg.id
    })

  }
  onClickingToEdit = () => {
    this.setState({
      viewKegForm: !this.state.viewKegForm
    })
  }
  render() {

    let editKegForm = null;

    if (this.state.viewKegForm) {
      editKegForm = <KegForm submitHandler={this.handleEditFormSubmission} buttonText="Edit this brew." />
    }
    return (
      <React.Fragment>
        <h2>{this.props.keg.name}</h2>
        <p>Brewed by: {this.props.keg.brewer}</p>
        <p><em>{this.props.keg.description}</em></p>
        <p>Price per draught: <strong>{this.props.keg.price} gp</strong></p>
        <br /><br /><hr />
        <button onClick={this.onClickingToEdit}>Edit this Brew</button>
        {editKegForm}

      </React.Fragment>
    )
  }

}
KegDetail.propTypes = {
  keg: PropTypes.object,
  onClickingToEdit: PropTypes.func,
  onClickingDelete: PropTypes.func,
  editFormVisible: PropTypes.bool,
  onEditSubmit: PropTypes.func
}
export default KegDetail;