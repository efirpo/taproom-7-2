import React from 'react';
import AddKeg from './AddKeg';
import KegList from './KegList';
import KegDetail from './KegDetail';

const fullPageStyles = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-around",
  backgroundColor: "#ccd8ff"
}

const detailPageStyles = {
  position: "sticky",
  top: "0"
}

const listPageStyles = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  flexWrap: "wrap",
  width: "50%"
}

const listStyles = {
  display: "flex",
  flexFlow: "row wrap",
  flexShrink: "2",
}

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

  handleClickingEditSubmit = (keg) => {
    const newMasterKegList = this.state.masterKegList.map((obj, index) => (obj.id === keg.id ? Object.assign({}, this.state.masterKegList[index], keg) : obj))
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
    const thisKeg = this.state.masterKegList.filter(e => e.id === id)[0]
    const volumeValue = thisKeg.volumeHeld
    const newVolume = { volumeHeld: volumeValue - 1 }
    let newMasterKegList = this.state.masterKegList;
    if (thisKeg.volumeHeld > 0) {
      newMasterKegList = this.state.masterKegList.map((obj, index) => (obj.id === thisKeg.id ? Object.assign(this.state.masterKegList[index], newVolume) : obj))
    }
    this.setState({
      masterKegList: newMasterKegList
    })
  }

  render() {
    let kegSelected = null;

    if (this.state.selectedKeg !== null) {
      kegSelected = <KegDetail keg={this.state.selectedKeg} onEditSubmit={this.handleClickingEditSubmit} onClickingDelete={this.handleClickingDelete} />
    }
    // KegList.forceUpdate(this.handleDrawingPint)

    return (
      <React.Fragment>
        <div id='full-page' style={fullPageStyles}>
          <div id='add-and-list' style={listPageStyles}>
            <div>
              <AddKeg onNewKegCreation={this.handleAddingNewKegToStock} />
            </div>
            <div id="list" style={listStyles}>
              <KegList kegList={this.state.masterKegList} onKegSelect={this.handleSelectingKeg} onDrawPint={this.handleDrawingPint} />
            </div>
          </div>
          <div id='details-and-edit' style={detailPageStyles}>
            {kegSelected}
          </div>
        </div>
      </React.Fragment >
    )
  }
}

export default TaproomControl;