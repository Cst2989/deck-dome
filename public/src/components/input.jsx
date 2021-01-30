import React, { Fragment } from 'react';

const InputComponent = ({ value, emit }) => {
  return (
    <Fragment>
      <input
        className="w-full border-2 border-purple-500 hover:border-gray-500 outline-none focus:border-gray-500 p-2 mt-4 rounded-xl font-mono h-12"
        type="text"
        placeholder="Add your name"
        value={value}
        onChange={(ev) => emit(ev.target.value)}
      />
    </Fragment>
  );
};

export default InputComponent;
