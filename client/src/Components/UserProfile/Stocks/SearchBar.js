import React from 'react';
import './SearchBar.css';

function SearchBar(props) {

    return  (
      <div>
    <h2 className="title">Stock Search</h2>

      <div className="SearchBar">
        <form className="SearchBar_Form">
          <input className="SearchBar__Input"
                 value={ props.value }
                 onChange={ props.onChange } />
          <button className="SearchBar__Button" onClick={ props.onClick }>search</button>
        </form>
      </div>
      </div>
    );
}

export default SearchBar;