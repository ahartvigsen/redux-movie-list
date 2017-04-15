import React from 'react'
import AddMovie from './AddMovie'
import MovieList from './MovieList'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
var injectTapEventPlugin = require("react-tap-event-plugin");
injectTapEventPlugin();
// import Footer from './Footer'
// import AddTodo from '../containers/AddTodo'
// import VisibleTodoList from '../containers/VisibleTodoList'

const styles = {
  addLeft: {
    width:'10%',
    float: 'left'
  },
  listRight: {
    width: '80%',
    float: 'right'
  }
}

const App = () => (
  <div>
    <div style={styles.addLeft}>
      <MuiThemeProvider>
        <AddMovie/>
      </MuiThemeProvider>
    </div>
    <div style={styles.listRight}>
      <MuiThemeProvider>
        <MovieList />
      </MuiThemeProvider>
    </div>
  </div>


)

export default App
