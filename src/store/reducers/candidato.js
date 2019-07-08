const initialState = JSON.parse(localStorage.getItem('CANDIDATOOOOO')) || {};

export default function(state = initialState, action) {
  switch (action.type) {
    case 'SET_CANDIDATO_DATA':
      const kk = { ...state, ...action.data };
      localStorage.setItem('CANDIDATOOOOO', JSON.stringify(kk));
      return kk;

    default:
      return state;
  }
}
