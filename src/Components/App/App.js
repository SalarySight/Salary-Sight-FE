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

export default App;
