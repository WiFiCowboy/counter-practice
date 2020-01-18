import React, { Component } from "react";
import Counter from "./Counter";
import "../App.css";
import Button from "./Button";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    };
  }

  handleCounter(btn){
    if(btn === "add"){
      this.setState({counter: this.state.counter + 1})
    } if(btn === "subtract"){
      this.setState({counter: this.state.counter - 1})
    }
  }

  handleButtonClick = (e) => {
    const btnType = e.target.id;
    return this.handleCounter(btnType);
  }


  render() {
    return (
      <div>
        <Counter counter={this.state.counter} />
        <Button onClick={this.handleButtonClick}/>
      </div>
    );
  }
}
