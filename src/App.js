import React, { Component } from 'react';
import './App.css';
import Child from "./component/parentToChild/child"
class App extends Component {
  state={
title:"mounika is a good girl"
  }
 changeTheWorld=(newName)=>{
   this.setState({title:newName})
 }
  render() {
    return (
      <div className="App">
       <Child downWhatever={()=>{this.changeTheWorld.bind(this,newName="Shourya")}}></Child>
      </div>
    );
  }
}

export default App;
