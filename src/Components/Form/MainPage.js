import React from 'react'
export default class MainPage extends React.Component {
   render(){
     return (
        <div>
          <button onClick={this.props.toggle}>Submit Salary</button>
        </div>
     )
    }   
}