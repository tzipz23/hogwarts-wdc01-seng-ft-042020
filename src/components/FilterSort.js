import React from 'react'

//Presentation Component so we'll make it a function component
//Functional Components dont need a render
const FilterSort = (props) => {
    console.log("filterSort props:", props)
    return(
        <div className="container">
        <div className="row">
            <div className="col-sm-12">

            <form>
                <div className="radio">
                <label>
                    <input type="radio" value={"true"} checked={props.showGreased ? true : false} onChange={props.handleGreased} />
                    Show Greasy Pigs
                </label>
                </div>
                <div className="radio">
                <label>
                    <input type="radio" value={""} checked={props.showGreased ? false : true} onChange={props.handleGreased} />
                    Show All Pigs
                </label>
                </div>
                <select onChange={props.handleDropDown}>
                    <option value="name">Name</option>
                    <option value="weight">Weight</option>
                </select>
            </form>
            </div>
        </div>
    </div>
    )
}

export default FilterSort