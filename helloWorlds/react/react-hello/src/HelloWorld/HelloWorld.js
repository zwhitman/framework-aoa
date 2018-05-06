import React from 'react';
import SubComp from '../SubComp/SubComp';
import Store from '../store/store';

class HelloWorld extends React.Component {
  constructor(props) {
    super(props);
    this.state = {storeCount: Store.getState()};
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    Store.dispatch({type: "INC", payload: 1})
    this.setState(currState => ({
      storeCount: !currState.storeCount
    }));
  }

  render() {
    return (
      <div className="HelloWorld">
        <h2>the state is {Store.getState()}</h2>
        <button onClick={this.handleClick}>plus</button>
        <SubComp name="this is the subDiv"/>
      </div>
    );
  }
}

export default HelloWorld
