import React from "react";

const loading = () => {
  return (
    <div className="cssload-container">
      <ul className="cssload-flex-container">
        <li>
          <span className="cssload-loading cssload-one"></span>
          <span className="cssload-loading cssload-two"></span>
          <span className="cssload-loading-center"></span>
        </li>
      </ul>
    </div>
  );
};

export default loading;
