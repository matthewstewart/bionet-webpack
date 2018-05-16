import React, { Component } from 'react';

class SearchBar extends Component {

  constructor(props) {
    super(props);
    this.state = {
      query: ""
    };
    this.changeQuery = this.changeQuery.bind(this);
    this.submitQuery = this.submitQuery.bind(this);
  }

  changeQuery(e) {
    let query = e.target.value;
    this.setState({
      query
    });
  }

  submitQuery(e) {
    e.preventDefault();
    let query = this.state.query;
    this.setState({
      query: ""
    });
  }
	
	render() {
    return (
      <form onSubmit={this.submitQuery}>
        <div className="field has-addons">
          <div className="control">
            <input 
              type="text" 
              className="input"
              placeholder="Search the Bionet"
              name="search"
              onChange={this.changeQuery}
              value={this.state.query}
            />
          </div>
          <div className="control">
            <a 
              className="button is-info"
              onClick={this.submitQuery}
            >Search</a>
          </div>
        </div>
      </form>
    );
  }

}

export default SearchBar;