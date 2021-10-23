import React from 'react'
import './SlideDrawer.css'
import Form from './Form'

// const SlideDrawer = ({ show, addCards }) => {
//   let drawerClasses = 'side-drawer'
//   if (show) {
//      drawerClasses = 'side-drawer open'
//   }
//   return (
//     <div className={drawerClasses}>
//        <Form closeForm={this.props.hide}>
//        </Form>
//     </div>
//   );
// }
//
// export default SlideDrawer
export default class SlideDrawer extends React.Component {
   render(){
       let drawerClasses = 'side-drawer'
       if(this.props.show) {
          drawerClasses = 'side-drawer open'
       }
       return(

          <div className={drawerClasses}>
             <Form closeForm={this.props.hide} addCards={this.props.addCards}>
             </Form>
          </div>
)
    }

}
