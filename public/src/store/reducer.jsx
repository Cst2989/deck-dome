const AppReducer = (state, action) => {
  switch (action.type) {
    case 'LOADING':
      return {
        ...state,
        isLoading: action.isLoading,
      };
    case 'SET_PLAYER':
      return {
        ...state,
        player: action.player,
      };
    default:
      return state;
  }
};

export default AppReducer;
