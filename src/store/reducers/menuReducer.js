export default (state = [], action) => {
  switch (action.type) {
    case 'ADD_ITEM':
      return state.concat(action.data);
    default:
      console.log('Default case');
      return state;
  }
};