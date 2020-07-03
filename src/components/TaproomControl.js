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

  render() {
    let kegSelected = null;

    if (this.state.selectedKeg !== null) {
      kegSelected = <KegDetail keg={this.state.selectedKeg} />
    }

    return (
      <React.Fragment>
        <AddKeg onNewKegCreation={this.handleAddingNewKegToStock} />
        <KegList kegList={this.state.masterKegList} onKegSelect={this.handleSelectingKeg} />
        {kegSelected}
      </React.Fragment>
    )
  }
}

export default TaproomControl;