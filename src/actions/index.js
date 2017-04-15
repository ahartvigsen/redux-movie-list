let nextId = 10
export const addMovie = (movie) => {
  return {
    type: 'ADD_MOVIE',
    id: nextId++,
    movie
  }
};
export const updateFormElement = (formElement) => {
  return {
    type: 'UPDATE_FORM_ELEMENT',
    formElement
  }
};

export const setSortColumn = (sortColumn) => {
  return {
    type: 'SET_SORT_COLUMN',
    sortColumn
  }
};

export const deleteMovie = (id) => {
  return {
    type: 'DELETE_MOVIE',
    id
  }
}
