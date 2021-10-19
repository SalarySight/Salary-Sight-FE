import React from 'react'
import Header from "../Header/Header";
import Cover from "../Cover/Cover";
import SlideDrawer from '../Form/SlideDrawer.js'
import Backdrop from '../Form/Backdrop.js'
import MainPage from '../Form/MainPage.js'
import { getSalaries } from "../../APICalls";
import './App.css';
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

    componentDidMount = () => {
    getSalaries()
      .then((data) =>
        this.setState({ posts: [...this.state.posts, ...data.posts] })
      )
      .catch((error) =>
        this.setState({ error: "Oops! Looks like something went wrong" })
      );
  };

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
         </div>
      )
    }
}
export default App

