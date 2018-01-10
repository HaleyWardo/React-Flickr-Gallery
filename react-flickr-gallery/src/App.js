import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom';
import React from 'react';

import './App.css';

//import components
import ImageWrapper from './components/ImageWrapper';
import Navigation from './components/Navigation';
import PathNotFound from './components/PathNotFound';
import SearchInput from './components/SearchInput';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchInput: ''
    };
  }

  render() {
    return (
        <BrowserRouter>
          <div className='App'>
            <Navigation />
            <Switch>
              <Route path='/search/:query' component={ImageWrapper} />
              <Route path='*' component={PathNotFound} />
            </Switch>
          </div>
        </BrowserRouter>
    );
  }
}

export default App;
