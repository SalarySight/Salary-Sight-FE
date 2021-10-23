import { useState, useEffect } from "react";
import Header from "../Header/Header";
import Cover from "../Cover/Cover";
import SlideDrawer from "../Form/SlideDrawer";
import Backdrop from "../Form/Backdrop";
import MainPage from "../Form/MainPage";
import SalaryCards from "../SalaryCards/SalaryCards";
import Loader from "../Loader/Loader";
import Error from "../Error/Error";
import { useQuery } from '@apollo/client';
import { GET_POST } from '../..';
import "./App.css";

const App = () => {
  const [drawerOpen, setDrawerOpen] = useState(false)
  const [salaryPosts, setSalaryPosts] = useState([])
  const { data, loading, error } = useQuery(GET_POST)

useEffect(() => {
  console.log('error', error)
  console.log('loading', loading)
  setSalaryPosts(data)
}, [data])

const drawerToggleClickHandler = () => {
  setDrawerOpen(!drawerOpen)
};

const backdropClickHandler = () => {
  setDrawerOpen(false)
};

  return (
    <div>
      <Header />
      <Cover />
      <SlideDrawer show={drawerOpen} />
      {drawerOpen && <Backdrop close={backdropClickHandler} />}
      <MainPage toggle={drawerToggleClickHandler} />
      {loading && <Loader />}
      {!loading && !error && <SalaryCards data={data.posts}/>}
    </div>
  );
}


// {!salaryPosts.length && !error && <Loader />}
// {error && !salaryPosts.length && <Error error={error} />}


// import { getCards } from "../utils/getCards";

// class App extends Component {
//   state = {
//     drawerOpen: false,
//     posts: [],
//     error: ""
//   };
//
//   componentDidMount = () => {
//     this.addCards();
//   };
//
//   addCards = () => {
//     getCards()
//     .then((data) => this.setState({ posts: data.posts }))
//     .catch(err => this.setState({ error: err }))
//   };
//
  // drawerToggleClickHandler = () => {
  //   this.setState({
  //     drawerOpen: !this.state.drawerOpen,
  //   });
  // };
//
  // backdropClickHandler = () => {
  //   this.setState({
  //     drawerOpen: false,
  //   });
  // };
//
//   render() {
    // let backdrop;
    // if (this.state.drawerOpen) {
    //   backdrop = <Backdrop close={this.backdropClickHandler} />;
    // }
//     return (
    //   <div>
    //     <Header />
    //     <Cover />
    //     <SlideDrawer show={this.state.drawerOpen} addCards={this.addCards} />
    //     {backdrop}
    //     <MainPage toggle={this.drawerToggleClickHandler} />
    //     {this.state.error && !this.state.posts.length && <Error error={this.state.error} />}
    //     {!this.state.posts.length && !this.state.error && <Loader />}
    //     <SalaryCards data={this.state.posts}/>
    //   </div>
    // );
//   }
// }
export default App;
