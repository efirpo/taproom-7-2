import React from 'react';
import AddKeg from './AddKeg';
import KegList from './KegList';
import KegDetail from './KegDetail';


class TaproomControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      masterKegList: [],
      selectedKeg: null,
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
    console.table(keg)
    const newMasterKegList = this.state.masterKegList.map((obj, index) => (obj.id === keg.id ? Object.assign({}, this.state.masterKegList[index], keg) : console.log("Error, fool!")))
    console.table(newMasterKegList)
    this.setState({
      masterKegList: newMasterKegList,
      selectedKeg: keg
    })
  }

  handleClickingDelete = (id) => {
    const newMasterKegList = this.state.masterKegList.filter(e => e.id !== id)
    this.setState({
      masterKegList: newMasterKegList,
      selectedKeg: null
    })
  }

  handleDrawingPint = (id) => {
    const newMasterKegList = this.state.masterKegList.map((obj, index) => (obj.id === id ? Object.assign({}, this.state.masterKegList[index], { volumeHeld: this.state.masterKegList[index].volumeHeld - 1 }) : console.log("pint error, fool!")))
    this.setState({
      masterKegList: newMasterKegList
    })


  }


  render() {
    let kegSelected = null;

    if (this.state.selectedKeg !== null) {
      kegSelected = <KegDetail keg={this.state.selectedKeg} onClickingToEdit={this.handleClickingShowEdit} onEditSubmit={this.handleClickingEditSubmit} onClickingDelete={this.handleClickingDelete} />
    }




    return (
      <React.Fragment>
        <div id='full-page'>
          <div id='add-and-list'>
            <AddKeg onNewKegCreation={this.handleAddingNewKegToStock} />
            <KegList kegList={this.state.masterKegList} onKegSelect={this.handleSelectingKeg} onDrawPint={this.handleDrawingPint} />
          </div>
          <div id='details-and-edit'>
            {kegSelected}
          </div>
        </div>
      </React.Fragment >
    )
  }
}

export default TaproomControl;