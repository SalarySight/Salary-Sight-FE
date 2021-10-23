import { useState, useEffect } from "react";
import { Route, Switch } from 'react-router-dom'
import Header from "../Header/Header";
import Cover from "../Cover/Cover";
import SlideDrawer from "../Form/SlideDrawer";
import Backdrop from "../Form/Backdrop";
import MainPage from "../Form/MainPage";
import SalaryCards from "../SalaryCards/SalaryCards";
import Loader from "../Loader/Loader";
import Error from "../Error/Error";
import NotFound from '../NotFound/NotFound';
import FilterForm from '../FilterForm/FilterForm';
import { useQuery } from '@apollo/client';
import { GET_POST } from '../..';
import "./App.css";

const App = () => {
  const [drawerOpen, setDrawerOpen] = useState(false)
  const [salaryPosts, setSalaryPosts] = useState([])
  const [filterInput, setFilterInput] = useState('')
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

const handleInput = (e) => {
  console.log(e.target.value)
  setFilterInput(e.target.value)
}

  return (
    <div>
      <Header />
      <Cover />
      <SlideDrawer toggle={drawerToggleClickHandler} show={drawerOpen} />
      {drawerOpen && <Backdrop close={backdropClickHandler} />}
      <MainPage toggle={drawerToggleClickHandler} />
      <FilterForm value={filterInput} handleInput={handleInput}/>
      {loading && <Loader />}
      {!loading && !error && <SalaryCards data={data.posts}/>}
    </div>
  );
}

export default App;
