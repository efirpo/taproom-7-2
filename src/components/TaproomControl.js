import React from 'react';


class TaproomControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      masterKegList =[],
      selectedKeg: null,
      editFormVisible: false
    }
  }

  render() {
    let kegSelected = null;

    if (this.state.selectedKeg !== null) {
      kegSelected = <KegDetail keg={this.state.selectedKeg} />
    }

    return (
      <React.Fragment>
        <AddKeg />
        <KegList />
        {kegSelected}
      </React.Fragment>
    )
  }
}

export default TaproomControl;