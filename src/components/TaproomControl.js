import React from 'react';
import AddKeg from './AddKeg';
import KegList from './KegList';
import KegDetail from './KegDetail';
import KegForm from './KegForm';


class TaproomControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      masterKegList: [],
      selectedKeg: null,
      editFormVisible: false
    }
  }
  handleAddingNewKegToStock = (keg) => {
    const newMasterKegList = this.state.masterKegList.concat(keg);
    this.setState({
      masterKegList: newMasterKegList
    })
  }
  handleSelectingKeg = (id) => {
    const thisKeg = this.state.masterKegList.filter(e => e.id === id)[0]
    this.setState({
      selectedKeg: thisKeg
    })
  }

  handleClickingShowEdit = () => {
    this.setState({
      editFormVisible: !this.state.editFormVisible
    })
  }

  handleClickingEditSubmit = (keg) => {
    const newMasterKegList = this.state.masterKegList.map((obj, index) => (obj.id === keg.id ? Object.assign({}, this.state.masterKegList[index], { keg }) : console.log("Error, fool!")))
    this.setState({
      masterKegList: newMasterKegList
    })
  }


  render() {
    let kegSelected = null;

    if (this.state.selectedKeg !== null) {
      if (this.state.editFormVisible) {
        kegSelected = <KegDetail keg={this.state.selectedKeg} onClickingEdit={this.handleClickingShowEdit} editKegForm={<KegForm submitHandler={this.handleClickingEditSubmit} buttonText="Edit this Keg" />} />
      } else {
        kegSelected = <KegDetail keg={this.state.selectedKeg} onClickingEdit={this.handleClickingShowEdit} />
      }

    }


    return (
      <React.Fragment>
        <div id='full-page'>
          <div id='add-and-list'>
            <AddKeg onNewKegCreation={this.handleAddingNewKegToStock} />
            <KegList kegList={this.state.masterKegList} onKegSelect={this.handleSelectingKeg} />
          </div>
          <div id='details-and-edit'>
            {kegSelected}
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default TaproomControl;