import './FilterForm.css'
import { useState }  from 'react'

const FilterForm = ({ filterInput, handleFilterInput, input, handleInput, filterData, clearFilterForm }) => {
  const [addFilterOpt, setAddFilterOpt] = useState(false)

  const addFilter =() => {
    setAddFilterOpt(true)
  }

  return (
    <>
    <select
      className='filter'
      name='filter'
      type='search'
      value={filterInput}
      onChange={(e) => handleFilterInput(e)}>

      <option value="" disabled selected>
        Filter By...
      </option>
      <option value="Age">Age</option>
      <option value="Gender">Gender</option>
      {/*<option value="Salary">Salary</option>*/}
      {/*add more filter options*/}
    </select>

    {filterInput === 'Age' &&
    <select
      className='filter-age'
      name='age'
      type='search'
      value={input}
      onChange={(e) => handleInput(e)}>

      <option value="" disabled selected>
        Age Options
      </option>
      <option value="18-24">18-24</option>
      <option value="25-34">25-34</option>
      <option value="35-44">35-44</option>
      <option value="45-54">45-54</option>
      <option value="55-64">55-64</option>
      <option value="65+">65+</option>
    </select>}

      {filterInput === 'Gender' &&
      <select
        className='filter-gender'
        name='gender'
        type='search'
        value={input}
        onChange={(e) => handleInput(e)}>

        <option value="" disabled selected>
          Gender Options
        </option>
        <option value="Woman">Woman</option>
        <option value="Man">Man</option>
        <option value="Transgender">Transgender</option>
        <option value="Non-binary/non-conforming">
          Non-binary/non-conforming
        </option>
        <option value="Prefer not to respond">Prefer not to respond</option>
      </select>}
      {/*{filterInput === 'Salary' &&
      <select
        className='filter-salary'
        name='salary'
        type='search'
        value={input}
        onChange={(e) => handleInput(e)}>
        <option value="" disabled selected>
          Salary Ranges
        </option>
        <option value="<60k">Less than 60k</option>
        <option value="60-80k">60k-80k</option>
        <option value="80-100k">80k-100k</option>
        <option value="100k-120k">100-120k</option>
        <option value="120k+">120k+</option>
      </select>}*/}
      {addFilterOpt && <select
        className='filter'
        name='filter'
        type='search'
        value={filterInput}
        onChange={(e) => handleFilterInput(e)}>

        <option value="" disabled selected>
          Filter By...
        </option>
        <option value="Age">Age</option>
        <option value="Gender">Gender</option>
        <option value="Salary">Salary</option>
      </select>}
      {!filterInput &&
      <select
        className='empty'
        name='empty'
        type='search'>
        <option value="" disabled selected>
        </option></select>}
      <button onClick={(e)=> filterData(filterInput, input)}>Search</button>
      {/*<button onClick={(e) => addFilter(e)}>Add Filter</button>*/}
      <button onClick={(e) => clearFilterForm(e)}>Remove Filters</button>

    </>
  );
}

export default FilterForm
