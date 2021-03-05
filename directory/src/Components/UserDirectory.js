import React, { Component } from 'react'
import IndexCard from './IndexCard'
import Nav from './Nav'
import data from '../data'

class UserDirectory extends Component {
  constructor(){
    super();
    this.state = {
      index: 0,
      data
    }

    this.increase = this.increase.bind(this);
    this.decrease = this.decrease.bind(this);
  }

  //Create two methods... one called increase, and one called decrease. In the increase method, check the value of index to see if it is less than data.length -1. If so, use setState to increment index by 1. In the decrease method, check to see if the value of index is greater than 0. If so, use setState to decrement index by 1.
  increase(){
      if(this.state.index < this.state.data.length - 1){
          this.setState({ index: this.state.index + 1 })
      }
  };

  decrease(){
      if(this.state.index > 0){
          this.setState({ index: this.state.index - 1 })
      }
  }

  //Bind these methods, giving them the context of this.

  //Pass these methods as props to Nav the component

  render(){
      return (
        <div>
            <IndexCard data={this.state.data} index={this.state.index}/>
            <Nav increase={this.increase} decrease={this.decrease}/>
        </div>
      )

  }
}




export default UserDirectory;
