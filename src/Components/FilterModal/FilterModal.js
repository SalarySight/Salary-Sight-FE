import React from 'react';
import { DialogContent, DialogOverlay } from '@reach/dialog';
import "@reach/dialog/styles.css";

const FilterModal = React.forwardRef(({ options, resetFilters, onApply, onDismiss, clearFilter}, ref) => {
    return (
      <>
        <DialogOverlay className="filter-modal" >
          <DialogContent
            ref={ref}
            className="filter-modal-wrapper"
            aria-label="modal window"
          >
            <div className="filter-modal-header">
              <button onClick={() => {
                resetFilters()
                clearFilter()}}>Reset Filters</button>
              <button onClick={onDismiss}>✕</button>
            </div>
            <div className="filter-modal-content">{options}</div>
            <div className="filter-modal-actions">
              <button onClick={onApply}>Apply Filters</button>
            </div>
          </DialogContent>
        </DialogOverlay>
      </>
    );
  });
export default FilterModal;
