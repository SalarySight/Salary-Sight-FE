import { useState, useEffect } from "react";
import { Route, Switch } from 'react-router-dom'
import Header from "../Header/Header";
import Cover from "../Cover/Cover";
import SlideDrawer from "../Form/SlideDrawer";
import Backdrop from "../Form/Backdrop";
import MainPage from "../Form/MainPage";
import SalaryCards from "../SalaryCards/SalaryCards";
import Loader from "../Loader/Loader";
import NoMatchError from "../NoMatchError/NoMatchError";
import NotFound from '../NotFound/NotFound';
import FilterForm from '../FilterForm/FilterForm';
import { useQuery } from '@apollo/client';
import { GET_POST } from '../..';
import "./App.css";

const App = () => {
  const [drawerOpen, setDrawerOpen] = useState(false)
  const [salaryPosts, setSalaryPosts] = useState([])
  const [filterPosts, setFilterPosts] = useState([])
  const [filterInput, setFilterInput] = useState('')
  const [filterError, setFilterError] = useState('')
  const [ageInput, setAgeInput] = useState('')
  const { data, loading, error } = useQuery(GET_POST)

const drawerToggleClickHandler = () => {
  setDrawerOpen(!drawerOpen)
};

const backdropClickHandler = () => {
  setDrawerOpen(false)
};

const handleFilterInput = (e) => {
  console.log(e.target.value)
  setFilterInput(e.target.value)
}

const handleAgeInput = (e) => {
  setAgeInput(e.target.value)
}

useEffect(() => {
  if (loading) {
    console.log('loading', loading)
  } else if (error) {
    console.log('error', error)
  } else {
    setSalaryPosts(data)
    console.log('salaryPOSTS', salaryPosts)
    console.log('data', data)
  }
  if (data) console.log(data.posts)
}, [data])

const filterData = (filterInput, input) => {
  setFilterPosts([])
  setFilterError('')
  const prop = filterInput.toLowerCase()
  const matchCards = salaryPosts.posts.filter(post => post[prop] === input)
  console.log('matched', matchCards)
  console.log('before', salaryPosts)
  if (matchCards.length !== 0) {
    setFilterPosts(matchCards)
  } else if (matchCards.length === 0) {
    setFilterError('No matches!')
  } else {
    return null;
  }
}

// const cleanData = () => {
//   if (data) {
//     return data
//   } else if (data && salaryPosts.length) {
//     return salaryPosts
//   } else {
//     console.log('EFFED UP')
//   }
// }

useEffect(() => {
  console.log('salaryPosts', salaryPosts)
}, [salaryPosts])

  return (
    <div>
      <Header />
      <Cover />
      <SlideDrawer toggle={drawerToggleClickHandler} show={drawerOpen} />
      {drawerOpen && <Backdrop close={backdropClickHandler} />}
      <MainPage toggle={drawerToggleClickHandler} />
      <FilterForm
        filterInput={filterInput}
        handleFilterInput={handleFilterInput}
        ageInput={ageInput}
        handleAgeInput={handleAgeInput}
        filterData={filterData}/>
      {loading && <Loader />}
      {!loading && !error && filterPosts.length === 0 && !filterError && <SalaryCards data={data.posts}/>}
      {!loading && !error && filterPosts.length !== 0 && <SalaryCards data={filterPosts}/>}
      {!loading && filterError && filterPosts.length === 0 && <NoMatchError />}
    </div>
  );
}

export default App;
