export const addMenuItem = (menuItem = {}) => {
  // Default data
  const { name, description = '', price = 0  } = menuItem;
  const data = { name, description, price };
  return {
    type: 'ADD_ITEM',
    data
  }
}