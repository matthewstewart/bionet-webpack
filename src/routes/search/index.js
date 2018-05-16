import React, { Component } from 'react';
import SearchBar from '../../components/searchBar';

class Search extends Component {
	
	render() {
    return (
    	<div className="viewport-container">
    		<div className="columns">
    			<div className="column">
    				<SearchBar />
    			</div>
    		</div>
    		<div className="columns">
    			<div className="column">

    			</div>
    		</div>
    	</div>
    );
  }

}

export default Search;