import React, { Fragment } from 'react';

const Loader = ({ isLoading = false }) => {
  return (
    <Fragment>
      {isLoading && (
        <div className="fixed top-0 left-0 w-screen h-screen bg-gray-900 bg-opacity-95 flex justify-center items-center">
          <div className="loader ease-linear rounded-full border-8 border-t-8 border-gray-200 h-64 w-64"></div>
        </div>
      )}
    </Fragment>
  );
};

export default Loader;
