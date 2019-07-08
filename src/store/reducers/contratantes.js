const initialState = [];

export default function(state = initialState, action) {
  switch (action.type) {
    case 'NEW_CONTRATANTE':
      return [...state, ...action.data];

    case 'SET_CONTRATANTE':
      return [...action.data];

    default:
      return state;
  }
}
