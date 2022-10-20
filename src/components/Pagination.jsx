import React from "react";

const Pagination = (props) => {
  const { page, totalPages, onLeftClick, onRightClick } = props;
  return (
    <div className="pagination-container">
      <span onClick={onLeftClick}>
        <div>« </div>
      </span>
      <div>
        &nbsp;&nbsp;&nbsp; {page} de {totalPages}&nbsp;&nbsp;&nbsp;&nbsp;
      </div>
      <span onClick={onRightClick}>
        <div> »</div>
      </span>
    </div>
  );
};

export default Pagination;
