import React, { Component } from "react";
import "../App.css";
import Nav from "./Nav";
import hogs from "../porkers_data";
import FilterSort from './FilterSort'
import HogsContainer from "./HogsContainer";



class App extends Component {
  
  constructor(){
    super()
    this.state = {
     showGreased: false,
     sortBy: "name"
    }
  }
  //when user edits the form => change state => render the DOM
  //when user changes the dropdown => change state => render the DOM

  handleDropDown = (event) => {
    console.log("attemp to change the SortBy state")
    this.setState({sortBy: event.target.value})
  }

  handleGreased = (event)=> {
    // console.log("hitttinnnn", event.target.value)
    this.setState({
      showGreased: Boolean(event.target.value)
    })
  }

  getFilterHogs(){
   
    if(this.state.showGreased){
      return hogs.filter(hog => hog.greased)
    }else{
      return hogs
    }
  }

  render() {
    // if the state of showGreased is false use hog, : hogs.filter
    
  let displayHogs = this.getFilterHogs()

  if(this.state.sortBy === "name"){
//sort displayHogs by name
    displayHogs = displayHogs.sort((hog1, hog2) => hog1.name.localeCompare(hog2.name))
  }else if(this.state.sortBy === "weight"){
//sort displayHogs by weight
    displayHogs = displayHogs.sort((hog1, hog2) => hog1.weight - hog2.weight)
  }

    return (
      <div className="App">
        <Nav />
       <FilterSort 
       handleGreased={this.handleGreased} 
       showGreased={this.state.showGreased} 
       handleDropDown={this.handleDropDown}
       />
       <HogsContainer piggys={displayHogs} />
      </div>
    );
  }
}

export default App;
