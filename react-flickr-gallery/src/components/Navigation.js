import { NavLink } from 'react-router-dom';
import React from 'react';
import SearchInput from './SearchInput';

class Navigation extends React.Component {
  navigateToRoute = (query) => {
    window.location.assign(`/search/${query}`);
  }

  render() {
    return (
      <div>
        <SearchInput onSubmit={this.navigateToRoute} />
        <ul className='main-nav'>
          <li className='list-item'>
            <NavLink to='/search/dinosaurs'>Dinosaurs</NavLink>
          </li>
          <li className='list-item'>
            <NavLink to='/search/porgs'>Porgs</NavLink>
          </li>
          <li className='list-item'>
            <NavLink to='/search/kittens'>Kittens</NavLink>
          </li>
        </ul>
      </div>
    );
  }
};

export default Navigation;
