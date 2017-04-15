import { combineReducers } from 'redux'
import movies from './movies'
import sortColumn from './sortColumn'

const movieApp = combineReducers({
  movies,
  sortColumn
})

export default movieApp
