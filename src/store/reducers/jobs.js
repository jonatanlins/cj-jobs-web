const initialState = {
  data: [
    {
      id: '00g5r4hg6t',
      title: 'Engenheiro de Software',
      company: {
        id: 'Smart Labs',
        name: 'Smart Labs',
      },
      salary: 1500,
      workload: 60,
      description:
        'bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla ',
    },
    {
      id: '01g5r4hg6t',
      title: 'Design de Interfaces',
      company: {
        id: 'Manna Digital',
        name: 'Manna Digital',
      },
      salary: 850,
      workload: 40,
      description:
        'bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla ',
    },
    {
      id: '02g5r4hg6t',
      title: 'Programador',
      company: {
        id: 'Comeia',
        name: 'Comeia',
      },
      salary: 0,
      workload: 60,
      description:
        'bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla ',
    },
    {
      id: '03g5r4hg6t',
      title: 'Professor',
      company: {
        id: 'UPE',
        name: 'UPE',
      },
      salary: 15000,
      workload: 80,
      description:
        'bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla ',
    },
  ],
};

export default function(state = initialState, action) {
  switch (action.type) {
    case 'NEW_CATEGORY':
      return { ...state, data: [...state.data, ...action.data] };

    default:
      return state;
  }
}
