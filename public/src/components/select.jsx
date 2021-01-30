import React, { Fragment } from 'react';

const SelectComponent = ({ value, emit }) => {
  return (
    <Fragment>
      <select>
        <option value="">Choose your color</option>
        <option value="red">Red</option>
        <option value="green">Green</option>
        <option value="yellow">Yellow</option>
        <option value="blue">Blue</option>
      </select>
    </Fragment>
  );
};

export default SelectComponent;
