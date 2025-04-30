import React from "react";
import { Link, useRouteError } from "react-router-dom";

const Error = () => {
  const errorInfo = useRouteError();
  console.log(errorInfo)
  return (
    <div className="error-page">
      <div className="error-details">
        <h1>Oops! Something Went Wrong!!</h1>
        <h2>
          {errorInfo.status}:{errorInfo.statusText}
        </h2>
        <h3 className="error-data">{errorInfo.data}</h3>

        <h3 className="error-back-home">
          <Link className="link-name" to="/">
            Back Home
          </Link>
        </h3>
      </div>
    </div>
  );
};

export default Error;
