export function reducer(state, action) {
  
  switch (action.type) {

    case 'SELECTED_CAT':
      return {
        ...state,
        cat : action.payload
      };
    case 'SELECTED_DOG':
    return {
      ...state,
      dog : action.payload
    };
    case 'CURRENT_ANIMAL':
      return {
        ...state,
        animal: action.payload
      };
    default: return state;
  }
  
}
