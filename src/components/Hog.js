import React from 'react'

//We 1st started this as a function component but we refactored to a class component
//b/c it needed to hold its own state for the toggle method


class Hog extends React.Component{

    constructor(){
        super()
        this.state ={
            showDetails: false //this hog is not showing details
        }
    }

    changeDetails = () => {
        //Going to change state
        // console.log("changing")
        this.setState({showDetails: !this.state.showDetails})
    }

    render(){
        console.log("Hog props:", this.props.pig)
   
        let pigImage = require(`../hog-imgs/${this.props.pig.name.toLocaleLowerCase().replace(/ /g,"_")}.jpg`)
    
        return(
            <div className="ui card" onClick={this.changeDetails}>
                <dig>{this.props.pig.name}</dig>
                <img src={pigImage} alt="pigs"/>
                {this.state.showDetails ? 
                <div>
                <p>Specialty: {this.props.pig.specialty}</p>
                <p>Greased: {this.props.pig.greased ? "true" : "false"}</p>
                <p>Weight: {this.props.pig.weight} </p>
                <p>Highest Medal Achieved: {this.props.pig["highest medal achieved"]}</p>
                </div> 
                : 
                null}
            </div>
        )
    }
}



// const Hog = (props) => {
//     console.log("Hog props:", props.pig)
   
//     let pigImage = require(`../hog-imgs/${props.pig.name.toLocaleLowerCase().replace(/ /g,"_")}.jpg`)

//     return(
//         <div className="ui card">
//             <dig>{props.pig.name}</dig>
//             <img src={pigImage}/>
//         </div>
//     )
// }

export default Hog

// When some event happens => change the state