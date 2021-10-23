import React from 'react'
import './SlideDrawer.css'
import Form from './Form'

export default class SlideDrawer extends React.Component {
   render() {
       let drawerClasses = 'side-drawer'
       if(this.props.show) {
          drawerClasses = 'side-drawer open'
       }
       return (

          <div className={drawerClasses}>
             <Form closeForm={this.props.hide}/>
          </div>
      )
    }
}
