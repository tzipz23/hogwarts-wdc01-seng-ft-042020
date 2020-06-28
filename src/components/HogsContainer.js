import React from 'react'
import Hog from './Hog'

class HogsContainer extends React.Component{
    
    render(){
        
        return(
            <div>
              {
              this.props.piggys.map(hogObject => <Hog key={hogObject.name} pig={hogObject} />)
              }
            </div>
        )
    }
}

export default HogsContainer