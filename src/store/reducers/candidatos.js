const initialState = [];

export default function(state = initialState, action) {
  switch (action.type) {
    case 'NEW_CANDIDATO':
      return [...state, ...action.data];

    case 'SET_CANDIDATO':
      return [...action.data];

    default:
      return state;
  }
}
