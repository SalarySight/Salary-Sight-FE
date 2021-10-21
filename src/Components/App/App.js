import React, { Component } from "react";
import Header from "../Header/Header";
import Cover from "../Cover/Cover";
import SlideDrawer from "../Form/SlideDrawer";
import Backdrop from "../Form/Backdrop";
import MainPage from "../Form/MainPage";
import { getCards } from "../utils/getCards";
import "./App.css";

class App extends Component {
  state = {
    drawerOpen: false,
    posts: [],
    error: "",
  };

  componentDidMount = () => {
    this.addCards();
  };

  addCards = () => {
    getCards().then((data) => {
      this.setState({ posts: data.posts });
    });
  };

  drawerToggleClickHandler = () => {
    this.setState({
      drawerOpen: !this.state.drawerOpen,
    });
  };
  
  backdropClickHandler = () => {
    this.setState({
      drawerOpen: false,
    });
  };

  render() {
    let backdrop;
    if (this.state.drawerOpen) {
      backdrop = <Backdrop close={this.backdropClickHandler} />;
    }
    return (
      <div>
        <Header />
        <Cover />
        <SlideDrawer show={this.state.drawerOpen} />
        {backdrop}
        <MainPage toggle={this.drawerToggleClickHandler} />
      </div>
    );
  }
}
export default App;
