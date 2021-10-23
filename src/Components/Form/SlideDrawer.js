import './SlideDrawer.css'
import Form from './Form'

const SlideDrawer = ({ toggle, show }) => {
   let drawerClasses = 'side-drawer'
   if (show) {
      drawerClasses = 'side-drawer open'
   }

   return (
      <div className={drawerClasses}>
         <Form showForm={show} toggle={toggle}/>
      </div>
  );
}

export default SlideDrawer;
