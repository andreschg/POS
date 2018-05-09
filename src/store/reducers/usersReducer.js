export default (state = [], action) => {
  switch (action.type) {
    case "ADD_USER":
      console.log('Add user');
      return state;
    default:
      return state;
  }
};