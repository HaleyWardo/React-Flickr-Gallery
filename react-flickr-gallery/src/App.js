import React from 'react';
import './App.css';
import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom';
import PropTypes from 'prop-types';

//import components
import Search from './components/Search';
import Navigation from './components/Navigation';
import Dinosaurs from './components/Dinosaurs';
import Porgs from './components/Porgs';
import Kittens from './components/Kittens';
import UserImages from './components/UserImages';
import NotFound from './components/NotFound';
import ApiFetch from './components/ApiFetch';


class App extends React.Component {
  constructor(props) {
    super(props);

    this.handler = this.handler.bind(this);
    this.navigateToRoute = this.navigateToRoute.bind(this);

    this.state = {
      searchInput: ''
    };
  }

  handler(value) {
    this.setState({
      searchInput: value
    });
  }

  navigateToRoute() {
    window.location.assign(`/search/${this.state.searchInput}`);
  }

  render() {
    return (
        <BrowserRouter>
          <div className="App">
            <Search action={this.handler} onSubmit={this.navigateToRoute} />
            <Navigation />
            <Switch>
              {/* <Route exact path="/" render={ () => (<Dinosaurs tag='Dinosaurs'  />)} /> */}
              {/* <Route exact path="/search" component={Search} />
              <Route path="/search/:query" component={Search} /> */}
              {/* :query is replaced with what the users input is */}
              <Route path="/dinosaurs" render={ () => (<Dinosaurs tag='Dinosaurs' />)} />
              <Route path="/porgs" render={ () => (<Porgs tag='Porgs' />)} />
              <Route path="/kittens" render={ () => (<Kittens tag='Kittens' />)} />
              {/* Set tag to the searchValue entered into the Search component */}
              {/* <Route path="/search" render={ () => (<UserImages tag={this.state.searchInput} />)} /> */}
              <Route path="/search/:query" component={UserImages} />
              {/* NotFound (404 error) is displayed if none of the paths are matched */}
              <Route component={NotFound} />
            </Switch>
          </div>
        </BrowserRouter>
    );
  }
}

export default App;

