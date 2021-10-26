import { useState } from "react";
import FilterBtnContainer from "../FilterBtnContainer/FilterBtnContainer";
import "./Filter.css";

const FilterForm = ({ handleFilters, clearFilterButton, handleSort }) => {
  const [filterActive, setFilterActive] = useState(false);
  const [genderWoman, setGenderWoman] = useState(false);
  const [genderMan, setGenderMan] = useState(false);
  const [genderTransMan, setGenderTransMan] = useState(false);
  const [genderTransWoman, setGenderTransWoman] = useState(false);
  const [genderNonBinary, setGenderNonBinary] = useState(false);
  const [other, setOther] = useState(false);
  const [age18, setAge18] = useState(false);
  const [age25, setAge25] = useState(false);
  const [age35, setAge35] = useState(false);
  const [age45, setAge45] = useState(false);
  const [age55, setAge55] = useState(false);
  const [age65, setAge65] = useState(false);
  const [programBE, setProgramBE] = useState(false);
  const [programFE, setProgramFE] = useState(false);
  const [salaryHiLo, setSalaryHiLo] = useState(false);
  const [salaryLoHi, setSalaryLoHi] = useState(false);


  const options = (
    <section className="filter-options-container">
      <div className="gender-section">
        <p className="gender-heading">Gender</p>
        <div className="gender-filters">
          <button
            className={
              genderWoman ? "active-filter filter-btn" : "default filter-btn"
            }
            onClick={() => setGenderWoman(!genderWoman)}
          >
            Female/Woman
          </button>
          <button
            className={
              genderMan ? "active-filter filter-btn" : "default filter-btn"
            }
            onClick={() => setGenderMan(!genderMan)}
          >

            Male/Man
          </button>
          <button
            className={
              genderTransMan
                ? "active-filter filter-btn"
                : "default filter-btn"
            }
            onClick={() => setGenderTransMan(!genderTransMan)}
          >
            Transmale/Transman
          </button>
          <button
            className={
              genderTransWoman
                ? "active-filter filter-btn"
                : "default filter-btn"
            }
            onClick={() => setGenderTransWoman(!genderTransWoman)}
          >
            Transfemale/Transwoman
          </button>
          <button
            className={
              genderNonBinary
                ? "active-filter filter-btn"
                : "default filter-btn"
            }
            onClick={() => setGenderNonBinary(!genderNonBinary)}
          >
            Non-Binary/Non-Conforming
          </button>
          <button
            className={
              other
                ? "active-filter filter-btn"
                : "default filter-btn"
            }
            onClick={() => setOther(!other)}
          >
            Other
          </button>
        </div>
      </div>
      <div className="progam-section">
        <p className="program-heading">Program</p>
        <div className="program-filters">
          <button
            className={
              programFE ? "active-filter filter-btn" : "default filter-btn"
            }
            onClick={() => setProgramFE(!programFE)}
          >
            Front-End
          </button>
          <button
            className={
              programBE ? "active-filter filter-btn" : "default filter-btn"
            }
            onClick={() => setProgramBE(!programBE)}
          >
            Back-End
          </button>
        </div>
      </div>
      <div className="age-section">
        <p className="age-heading">Age</p>
        <div className="age-filters">
          <button
            className={
              age18 ? "active-filter filter-btn" : "default filter-btn"
            }
            onClick={() => setAge18(!age18)}
          >
            18-24
          </button>
          <button
            className={
              age25 ? "active-filter filter-btn" : "default filter-btn"
            }
            onClick={() => setAge25(!age25)}
          >
            25-34
          </button>
          <button
            className={
              age35 ? "active-filter filter-btn" : "default filter-btn"
            }
            onClick={() => setAge35(!age35)}
          >
            35-44
          </button>
          <button
            className={
              age45 ? "active-filter filter-btn" : "default filter-btn"
            }
            onClick={() => setAge45(!age45)}
          >
            45-54
          </button>
          <button
            className={
              age55 ? "active-filter filter-btn" : "default filter-btn"
            }
            onClick={() => setAge55(!age55)}
          >
            55-64
          </button>
          <button
            className={
              age65 ? "active-filter filter-btn" : "default filter-btn"
            }
            onClick={() => setAge65(!age65)}
          >
            65+
          </button>
        </div>
      </div>
      <div className="salary-section">
        <p className="salary-heading">Salary</p>
        <div className="salary-filters">
          <button
            className={
              salaryHiLo ? "active-filter filter-btn" : "default filter-btn"
            }
            onClick={() => {
              setSalaryHiLo(true)
              setSalaryLoHi(false)}}
            onClick={() => setSalaryHiLo(!salaryHiLo)}
          >
            High to Low
          </button>
          <button
            className={
              salaryLoHi ? "active-filter filter-btn" : "default filter-btn"
            }
            onClick={() => {
              setSalaryLoHi(true)
              setSalaryHiLo(false)}}
            onClick={() => setSalaryLoHi(!salaryLoHi)}
          >
            Low to High
          </button>
        </div>
      </div>
    </section>
  );

  const filterObj = {
    gender: {
      "Female/Woman": genderWoman,
      "Male/Man": genderMan,
      "Transmale/Transman": genderTransMan,
      "Transfemale/Transwoman": genderTransWoman,
      "Non-Binary/Non-Conforming": genderNonBinary,
      "Other": other
    },
    age: {
      "18-24": age18,
      "25-34": age25,
      "35-44": age35,
      "45-54": age45,
      "55-64": age55,
      "65+": age65,
    },
    program: {
      BE: programBE,
      FE: programFE,
    },
    salary: {
      "LoHi": salaryLoHi,
      "HiLo": salaryHiLo,
    },
  };

  const handleApply = (e) => {
    e.preventDefault()
    console.log('here')
    handleFilters(filterObj);
    handleSort(filterObj);
    setFilterActive(false);
  };

  const resetFilters = () => {
    setGenderWoman(false);
    setGenderMan(false);
    setGenderTransMan(false);
    setGenderTransWoman(false);
    setGenderNonBinary(false);
    setOther(false);
    setAge18(false);
    setAge25(false);
    setAge35(false);
    setAge45(false);
    setAge55(false);
    setAge65(false);
    setProgramBE(false);
    setProgramFE(false);
    setSalaryHiLo(false);
    setSalaryLoHi(false);
  };

  return (
    <>
      <div className="filter">
        <FilterBtnContainer
          options={options}
          resetFilters={resetFilters}
          onApply={handleApply}
          onDismiss={() => setFilterActive(false)}
          clearFilter={clearFilterButton}
        />
      </div>
    </>
  );
};

export default FilterForm;
