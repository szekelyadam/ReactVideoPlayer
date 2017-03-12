import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyDT758earpxKx-a_8ziuD0LU3V0IL2vvy8';

const App = () => {
  return (
    <div>
      <SearchBar />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector('.container'));
