
import React from 'react';

class Toggle extends React.Component {

  constructor(props){
    super(props)

    this.state = {
      isToggle: true
    }
  }

  handleClick = () => {
    this.setState((state) => ({isToggle:!state.isToggle}));
  }

  render(){

    return <button onClick={this.handleClick}>{this.state.isToggle ? 'ON' : 'OFF'}</button>

  }

}

export default Toggle;