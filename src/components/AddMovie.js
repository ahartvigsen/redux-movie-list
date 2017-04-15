import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { addMovie, updateFormElement } from '../actions';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

var years = [];
var year;
for(year = new Date().getFullYear(); year >= 1900; year--) {
  years.push(year.toString());
}

class AddMovie extends Component {
  static propTypes = {
    addMovie: PropTypes.func.isRequired,
    updateFormElement: PropTypes.func.isRequired
  }

  menuItems() {
    return years.map((year) => (
      <MenuItem
        key={year}
        insetChildren={true}
        value={year}
        primaryText={year}
      />
    ));
  }

  render() {
    return (
      <div>
        <TextField
          id="text-field-title"
          floatingLabelText="Movie Title"
          value={this.props.title}
          onChange={(e) => this.props.updateFormElement({title: e.target.value})} />
        <br />
        <SelectField
          floatingLabelText="Rating"
          value={this.props.rating}
          onChange={(event, index, value) => this.props.updateFormElement({rating: value})}
          autoWidth={true}>
            <MenuItem value={"G"} primaryText="G" />
            <MenuItem value={"PG"} primaryText="PG" />
            <MenuItem value={"PG-13"} primaryText="PG-13" />
            <MenuItem value={"R"} primaryText="R" />
        </SelectField>
        <br />
        <SelectField
          floatingLabelText="Year"
          value={this.props.year}
          onChange={(event, index, value) => this.props.updateFormElement({year: value})}
          autoWidth={true}>
            {this.menuItems()}
        </SelectField>
        <br />
        <RaisedButton
          label="Add Movie"
          primary="true"
          onClick={this.handleSubmit.bind(this)} />
      </div>
    )
  }

  handleSubmit (e) {
    if(this.props.title !== '' && this.props.rating !== '' && this.props.year !== '') {
      var movie = {
        title: this.props.title,
        rating: this.props.rating,
        year: this.props.year
      }
      this.props.addMovie(movie);
    }
  }
}

function mapStateToProps(state) {
	return {
		...state.movies.formElements,
    movieList: state.movies.movieList
	}
}

function mapDispatchToProps(dispatch) {
  return {
    addMovie: (movie) => dispatch(addMovie(movie)),
    updateFormElement: (formElement) => dispatch(updateFormElement(formElement))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddMovie);
