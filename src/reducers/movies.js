const initialState = {
  formElements: {
    title: '',
    rating: '',
    year: ''
  },
  movieList: [
    {
      id: 1,
      title: 'Tommy Boy',
      rating: 'PG-13',
      year: '1995'
    },
    {
      id: 2,
      title: 'BFG',
      rating: 'PG',
      year: '2016'
    },
    {
      id: 3,
      title: 'Deadpool',
      rating: 'R',
      year: '2016'
    },
    {
      id: 4,
      title: 'Black Sheep',
      rating: 'PG-13',
      year: '1996'
    }
  ]
};

const sortList = (movieList, sortColumn) => {
  switch (sortColumn) {
    case 'TITLE':
      return movieList.sort((a, b) => {
        if(a.title.toLowerCase() < b.title.toLowerCase())
          return -1
        if(a.title.toLowerCase() > b.title.toLowerCase())
          return 1
        return 0
      })
    case 'RATING':
      return movieList.sort((a, b) => {
        if(a.rating < b.rating)
          return -1
        if(a.rating > b.rating)
          return 1
        return 0
      })
    case 'YEAR':
      return movieList.sort((a, b) => {
        if(a.year < b.year)
          return -1
        if(a.year > b.year)
          return 1
        return 0
      })
    default:
      return movieList
  }
}

const movies = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_MOVIE':
      action.movie.id = action.id;
      return {formElements: initialState.formElements, movieList: state.movieList.concat([action.movie])}
    case 'UPDATE_FORM_ELEMENT':
      return {...state, formElements: {...state.formElements, ...action.formElement}}
    case 'DELETE_MOVIE':
      return {...state, movieList: state.movieList.filter((moive) => { return moive.id !== action.id;}) }
    case 'SET_SORT_COLUMN':
        return {...state, movieList: sortList(state.movieList, action.sortColumn)}
    default:
      return state
  }
}

export default movies
