import React from 'react'
import Header from "../Header/Header";
import Cover from "../Cover/Cover";
import SlideDrawer from '../Form/SlideDrawer.js'
import Backdrop from '../Form/Backdrop.js'
import MainPage from '../Form/MainPage.js'
import { Route, Switch } from "react-router-dom";
import './App.css';

class App extends React.Component {
state = { drawerOpen: false }
   drawerToggleClickHandler = () => {
       this.setState({
         drawerOpen: !this.state.drawerOpen
       })
   }
   render(){
      let backdrop;
      if(this.state.drawerOpen){
        backdrop = <Backdrop/>;
       }

  return (
    <div className="App">
      <Header />
      <Cover />
      < SlideDrawer show={this.state.drawerOpen}/>
             { backdrop }
      < MainPage toggle={this.drawerToggleClickHandler}/>
    </div>
  );
}
}
export default App
