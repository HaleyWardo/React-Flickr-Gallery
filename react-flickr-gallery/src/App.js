import {
  BrowserRouter,
  Route,
  Switch,
  NavLink
} from 'react-router-dom';
import React from 'react';

import './App.css';

//import components
import ImageWrapper from './components/ImageWrapper';
import Navigation from './components/Navigation';
import SearchInput from './components/SearchInput';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchInput: ''
    };

    this.navigateToRoute = this.navigateToRoute.bind(this);


  }

  navigateToRoute = (query) => {
    window.location.assign(`/search/${query}`);
  }

  render() {
    return (
        <BrowserRouter>
          <div className='App'>
            <SearchInput onSubmit={this.navigateToRoute} />
            <Navigation />
            <Switch>
              <Route path='/search/:query' component={ImageWrapper} />
            </Switch>
          </div>
        </BrowserRouter>
    );
  }
}

export default App;
