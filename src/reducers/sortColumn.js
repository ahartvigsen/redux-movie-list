const sortColumn = (state = 'TITLE', action) => {
  switch (action.type) {
    case 'SET_SORT_COLUMN':
      return action.sortColumn
    default:
      return state
  }
}

export default sortColumn
