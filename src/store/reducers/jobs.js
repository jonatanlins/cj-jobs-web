const initialState = [];

export default function(state = initialState, action) {
  switch (action.type) {
    case 'NEW_VAGA':
      return [...state, ...action.data];

    case 'SET_VAGA':
      return [...action.data];

    default:
      return state;
  }
}
