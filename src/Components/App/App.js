import { useState, useEffect, useRef } from "react";
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
import FilterForm from "../FilterForm/FilterForm";
import { useQuery } from "@apollo/client";
import { GET_POST } from "../..";
import "./App.css";

const App = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [salaryPosts, setSalaryPosts] = useState([]);
  const [filterPosts, setFilterPosts] = useState([]);
  const [filterInput, setFilterInput] = useState("");
  const [filterError, setFilterError] = useState("");
  const [filterState, setFilterState] = useState({});
  const [filterUpdateState, setFilterUpdateState] = useState({});
  const [sortState, setSortState] = useState({ sort: "low" });
  const [toggle, setToggle] = useState(true);
  const [input, setInput] = useState([]);
  const { data, loading, error } = useQuery(GET_POST);

  const handleToggle = () => {
    setToggle(!toggle);
  };
  const drawerToggleClickHandler = () => {
    setDrawerOpen(!drawerOpen);
  };

  const backdropClickHandler = () => {
    setDrawerOpen(false);
  };

  const handleFilterInput = (e) => {
    setFilterInput(e.target.value);
  };

  const handleInput = (e) => {
    setInput(e.target.value);
    console.log(input);
  };
  const handleFilterChange = (key, newValue) => {
    const currentValues = [];
    handleToggle();
    key = key.toLowerCase();
    if (newValue === "") {
      let update = filterState;
      delete update[key];
      console.log(update);
      setFilterState(update);
    } else {
      setFilterUpdateState({ [key]: newValue });
      setFilterState({ ...filterState, [key]: [...currentValues, newValue] });
    }
  };
  const clearFilterForm = (e) => {
    console.log("hello");
    setFilterInput("");
    setFilterPosts([]);
  };

  useEffect(() => {
    if (loading) {
      console.log("loading", loading);
    } else if (error) {
      console.log("error", error);
    } else {
      setSalaryPosts(data);
    }
  }, [data]);

  const didMount = useRef(true);

  useEffect(() => {
    if (didMount.current) {
      didMount.current = false;
    } else {
      console.log(Object.values(filterUpdateState));
      filterData();
    }
  }, [filterUpdateState, toggle]);

  const filterData = () => {
    var filteredCodes = salaryPosts.posts;
    Object.keys(filterState).map(function (key, index) {
      function getFilteredCodes(array, key, value) {
        return array.filter(function (e) {
          if (value[0].length === 0) {
            return true;
          } else {
            return value[0].includes(e[key]);
          }
        });
      }

      filteredCodes = getFilteredCodes(
        salaryPosts.posts,
        key,
        filterState[key]
      );
    });
    console.log(salaryPosts.posts);
    //Object.keys(filterUpdateState)[0]
    filteredCodes !== [] ? setFilterPosts(filteredCodes) : setFilterPosts([]);
  };
  const sortFilter = () => {
    function compare(a, b) {
      if (a.salary < b.salary) {
        return -1;
      }
      if (a.salary > b.salary) {
        return 1;
      }
      return 0;
    }

    var a = filteredCodes.sort(compare);
    if (sortState["sort"] === "high") {
      a = a.reverse();
    } else if (sortState["sort"] === "low") {
      a = a;
    }
  };
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
        input={input}
        handleInput={handleInput}
        filterData={filterData}
        clearFilterForm={clearFilterForm}
        handleFilterChange={handleFilterChange}
        salaryPosts={salaryPosts}
      />
      {!loading && !error && filterPosts.length === 0 && !filterError && (
        <SalaryCards data={data.posts} />
      )}
      {!loading && !error && filterPosts.length !== 0 && (
        <SalaryCards data={filterPosts} />
      )}
      {!loading && filterError && filterPosts.length === 0 && <NoMatchError />}
    </div>
  );
};

export default App;
