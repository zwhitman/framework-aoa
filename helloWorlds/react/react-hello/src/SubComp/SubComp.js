import React from 'react';
import Store from '../store/store';

class subComp extends React.Component {
  render() {
    return <div className="subComp">
      <h1>{this.props.name}  with {Store.getState()}</h1>
    </div>
  }
}

export default subComp
