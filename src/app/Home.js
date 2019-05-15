import React from "react";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getMovies, searchMovies } from "../actions/moviesActions";
import { getTV, searchTV } from "../actions/tvActions";
import { setSearchQuery } from "../actions/searchActions";

//custom components
import CategoryButtons from "../components/CategoryButtons";
import SearchBar from "../components/SearchBar";
import ResultsContainer from "../components/ResultsContainer";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      category: 'tv',
    };
  }
  
  componentDidMount() {
    this.handleChange(this.props.searchQuery)
  }

  categoryHandler = async category => {
    await this.setState({ category });
    this.handleChange(this.props.searchQuery)
  };

  handleChange = (query) => {
    if(query.length < 3) {
      this.state.category === 'tv' ? this.props.getTV() : this.props.getMovies()
    } else {
      this.props.setSearchQuery(query)
      this.state.category === 'tv' ? this.props.searchTV(query) : this.props.searchMovies(query)
    }
  }

  render() {

    return (
      <div className="container py-3">
        <CategoryButtons categoryHandler={this.categoryHandler} current={this.state.category} />
        <SearchBar doneTyping={this.handleChange} value={this.props.searchQuery} />
        <ResultsContainer titles={this.props[this.state.category]} category={this.state.category} />
      </div>
    );
  }
}

const mapState = state => ({
  movie: state.movies.movies,
  tv: state.tvShows.tvShows,
  searchQuery: state.search.searchQuery
});
const mapActions = dispatch =>
  bindActionCreators(
    {
      getMovies,
      searchMovies,
      getTV,
      searchTV,
      setSearchQuery
    },
    dispatch
  );

export default connect(
  mapState,
  mapActions
)(Home);
