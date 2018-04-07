import React, { Component } from 'react';

class NavBar extends Component {
  render() {
    return (
      <div className='nav-wrapper'>
        <button className='nav-btn'  onClick={() => this.props.changePage('homePage')}>
          Home
        </button>
        <button className='nav-btn' onClick={() => this.props.changePage('aboutPage')}>
          About
        </button>
        <button className='nav-btn' onClick={() => this.props.changePage('blogPage')}>
          Blogs
        </button>
      </div>
    );
  }
}

export default NavBar;