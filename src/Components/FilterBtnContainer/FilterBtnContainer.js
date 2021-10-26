import React from 'react';
import './FilterBtnContainer.css'

const FilterBtnContainer = ( { options, resetFilters, onApply, onDismiss, clearFilter} ) => {
    return (
      <>
          <section className="filter-modal-wrapper">
            <div className="filter-modal-content">{options}</div>
            <div className="filter-actions">
              <button className="apply-clear-btn" onClick={onApply}>Apply Filters</button>
              <button className="apply-clear-btn" onClick={() => {
                resetFilters()
                clearFilter()}}>Reset Filters</button>
            </div>
          </section>
      </>
    );
  }
export default FilterBtnContainer;


// <button onClick={onDismiss}>✕</button>
// <DialogOverlay className="filter-modal">
// </DialogOverlay>
