import React from 'react'
import Header from "../Header/Header";
import APICalls from "../../APICalls";
import Cover from "../Cover/Cover";
import SlideDrawer from '../Form/SlideDrawer.js'
import Backdrop from '../Form/Backdrop.js'
import MainPage from '../Form/MainPage.js'
import './App.css';

// this is a test

class App extends React.Component {
   state = {
     drawerOpen: false,
     posts: [],
     error: ""
   }

drawerToggleClickHandler = () => {
    this.setState({
      drawerOpen: !this.state.drawerOpen
    })
  }
backdropClickHandler = () => {
    this.setState({
      drawerOpen: false
    })
  }
   render(){
      let backdrop;
      if(this.state.drawerOpen){
        backdrop = <Backdrop close={this.backdropClickHandler}/>;
       }
      return(
         <div>
          <Header />
          <Cover />
           <SlideDrawer show={this.state.drawerOpen} />
           { backdrop }
           <MainPage toggle={this.drawerToggleClickHandler} />
           <APICalls />
         </div>
      )
    }
}
export default App
