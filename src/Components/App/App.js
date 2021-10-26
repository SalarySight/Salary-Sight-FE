import { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import Header from "../Header/Header";
import Cover from "../Cover/Cover";
import SlideDrawer from "../Form/SlideDrawer";
import Backdrop from "../Form/Backdrop";
import MainPage from "../Form/MainPage";
import SalaryCards from "../SalaryCards/SalaryCards";
import Loader from "../Loader/Loader";
import NoMatchError from "../NoMatchError/NoMatchError";
import NotFound from "../NotFound/NotFound";
import Error from "../Error/Error";
import FilterForm from "../FilterForm/FilterForm";
import Results from "../Results/Results";
import { useQuery } from "@apollo/client";
import { GET_POST } from "../..";
import {
  filterByCategories,
  cleanFilters,
  handleSort,
} from "../FilterForm/helperFunctions";
import "./App.css";

const App = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [salaryPosts, setSalaryPosts] = useState([]);
  const [filterPosts, setFilterPosts] = useState([]);
  const [filterError, setFilterError] = useState("");
  const { data, loading, error } = useQuery(GET_POST);

  const drawerToggleClickHandler = () => {
    setDrawerOpen(!drawerOpen);
  };

  const backdropClickHandler = () => {
    setDrawerOpen(false);
  };

  const handleFilters = (filterObj) => {
    const cleanedFilters = cleanFilters(filterObj);
    setFilterPosts(filterByCategories(cleanedFilters, salaryPosts));
    if (filterPosts.length === 0) {
      setFilterError(true);
    } else if (filterPosts.length !== 0) {
      return filterPosts;
    } else {
      return salaryPosts;
    }
  };

  const handleSort = (filterObj) => {
    if (filterPosts.length === 0) {
      const arrayToSort = [...salaryPosts];
      if (filterObj.salary.HiLo === true && filterObj.salary.LoHi === false) {
        const newArr = arrayToSort.sort((a, b) => b.salary - a.salary);
        console.log(newArr)
        return setSalaryPosts(newArr);
      }
      if (filterObj.salary.LoHi === true && filterObj.salary.HiLo === false) {
        const newArr = arrayToSort.sort((a, b) => a.salary - b.salary);
        console.log(newArr)
        return setSalaryPosts(newArr);
      }
    } else if (salaryPosts.length === 0) {
      const arrayToSort = [...filterPosts];
      if (filterObj.salary.HiLo === true && filterObj.salary.LoHi === false) {
        const newArr = arrayToSort.sort((a, b) => b.salary - a.salary);
        console.log(newArr)
        return setFilterPosts(newArr);
      }
      if (filterObj.salary.LoHi === true && filterObj.salary.HiLo === false) {
        const newArr = arrayToSort.sort((a, b) => a.salary - b.salary);
        console.log(newArr)
        return setFilterPosts(newArr);
      }
    }
  };

  const clearFilterButton = (e) => {
    if (filterPosts && !loading) {
      setFilterPosts([]);
      setFilterError(false);
    }
  };

  useEffect(() => {
    if (loading) {
      console.log("loading", loading);
    } else if (error) {
      console.log("error", error);
    } else {
      setSalaryPosts(data.posts);
    }
  }, [data]);

  return (
    <div>
      <Switch>
        <Route
          exact
          path="/"
          render={({ match }) => {
            return (
              <>
                <Header match={match} />
                <Cover />
                <MainPage toggle={drawerToggleClickHandler} match={match} />
                <SlideDrawer
                  toggle={drawerToggleClickHandler}
                  show={drawerOpen}
                />
                {drawerOpen && <Backdrop close={backdropClickHandler} />}
                <FilterForm
                  handleFilters={handleFilters}
                  clearFilterButton={clearFilterButton}
                  handleSort={handleSort}
                />
                {loading && <Loader />}
                {!loading && error && <Error err={error} />}
                {!loading &&
                  !error &&
                  filterPosts.length === 0 &&
                  !filterError && <SalaryCards data={data.posts} />}
                {!loading && !error && filterPosts.length !== 0 && (
                  <SalaryCards data={filterPosts} />
                )}
                {!loading && filterError && filterPosts.length === 0 && (
                  <NoMatchError />
                )}
              </>
            );
          }}
        />
        <Route
          exact
          path="/:githubName"
          render={({ match }) => {
            return (
              <>
                <Header match={match} />
                <Cover />
                <MainPage toggle={drawerToggleClickHandler} match={match} />
                <SlideDrawer
                  toggle={drawerToggleClickHandler}
                  show={drawerOpen}
                />
                {drawerOpen && <Backdrop close={backdropClickHandler} />}
                <FilterForm
                  handleFilters={handleFilters}
                  clearFilterButton={clearFilterButton}
                  handleSort={handleSort}
                />
                {loading && <Loader />}
                {!loading && error && <Error err={error} />}
                {!loading &&
                  !error &&
                  filterPosts.length === 0 &&
                  !filterError && <SalaryCards data={data.posts} />}
                {!loading && !error && filterPosts.length !== 0 && (
                  <SalaryCards data={filterPosts} />
                )}
                {!loading && filterError && filterPosts.length === 0 && (
                  <NoMatchError />
                )}
              </>
            );
          }}
        />
        <Route path="*" render={() => <NotFound />} />
      </Switch>
    </div>
  );
};

export default App;
