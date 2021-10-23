import './FilterForm.css'

const FilterForm = ({ value, handleInput }) => {
  return (
    <input className='filter-form' type='search' value={value} onChange={(e) => handleInput(e)}></input>
  );
}

export default FilterForm
