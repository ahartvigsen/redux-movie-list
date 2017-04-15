import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { deleteMovie, setSortColumn } from '../actions';
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import Subheader from 'material-ui/Subheader';
import Delete from 'material-ui/svg-icons/action/delete';
import RaisedButton from 'material-ui/RaisedButton';

class MovieList extends Component {
  static propTypes = {
    deleteMovie: PropTypes.func.isRequired,
    setSortColumn: PropTypes.func.isRequired
  }

  render() {
    return (
      <div>

      <RaisedButton
        label="Title"
        primary={this.props.sortColumn === 'TITLE'}
        secondary={this.props.sortColumn !== 'TITLE'}
        onClick={(e) => this.props.setSortColumn('TITLE')} />
      <RaisedButton
        label="Rating"
        primary="true"
        primary={this.props.sortColumn === 'RATING'}
        secondary={this.props.sortColumn !== 'RATING'}
        onClick={(e) => this.props.setSortColumn('RATING')} />
      <RaisedButton
        label="Year"
        primary="true"
        primary={this.props.sortColumn === 'YEAR'}
        secondary={this.props.sortColumn !== 'YEAR'}
        onClick={(e) => this.props.setSortColumn('YEAR')} />
      <GridList cols={3}>
        <Subheader>Movies</Subheader>
        {this.props.movieList.map((movie) => (
        <GridTile
          key={movie.id}
          title={movie.title}
          titleStyle="height 30%"
          subtitle={<span><b>{movie.year}<br/>{movie.rating}</b></span>}
          actionIcon={<IconButton onClick={(e) => this.props.deleteMovie(movie.id)}><Delete color="white" /></IconButton>}
        >
        <img src='https://image.freepik.com/free-vector/cartoon-movie-projector_23-2147509100.jpg' alt='' />
        </GridTile>
      ))}
      </GridList>
      </div>
    );
  }
}

function mapStateToProps(state) {
	return {
    movieList: state.movies.movieList,
    sortColumn: state.sortColumn
	}
}

function mapDispatchToProps(dispatch) {
  return {
    deleteMovie: (id) => dispatch(deleteMovie(id)),
    setSortColumn: (sortColumn) => dispatch(setSortColumn(sortColumn))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieList);
