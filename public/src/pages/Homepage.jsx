import React, { useState, Fragment } from 'react';
import InputComponent from '../components/input';
import Loader from '../components/loader';
import { useGlobal } from '../store/state';
import { Http } from '../api/http';
const Homepage = (props) => {
  const [name, setName] = useState('');
  const [{ isLoading }, dispatch] = useGlobal();
  const handleCreate = async () => {
    dispatch({
      type: 'LOADING',
      isLoading: true,
    });

    const result = await Http.post(`/players`, { name });
    if (result.data) {
      dispatch({
        type: 'SET_PLAYER',
        player: result.data,
      });
      setName('');
      dispatch({
        type: 'LOADING',
        isLoading: false,
      });
      props.history.push('/rooms');
    }
  };
  return (
    <Fragment>
      <Loader isLoading={isLoading} />
      <div className="p-6 max-w-xl mx-auto bg-white rounded-md shadow-md flex items-center space-x-4 mt-10 flex-col">
        <h2 className="font-mono text-lg text-center w-full">
          Welcome to Deck Dome
        </h2>
        <p className="font-mono text-xs text-left w-full mt-4">
          Please create you character:
        </p>
        <InputComponent value={name} emit={(val) => setName(val)} />
        <button
          className="mt-8 border-2 border-purple-500 hover:border-gray-500 bg-transparent text-purple-700 hover:text-gray-700 py-3 px-4 font-semibold rounded-md"
          onClick={handleCreate}
        >
          Create
        </button>
      </div>
    </Fragment>
  );
};

export default Homepage;
