import React, { Component } from 'react';
import HomePage from './homepage/homepage';
import About from './about/about';
import NavBar from './navbar/navBar';
import Blog from './blog/blog';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 'homePage'
    };
  }

  handleClick(pageValue) {
    if(pageValue === this.state.page) {
      return;
    } 

    this.setState({
      page: pageValue
    });
  }

  render() {
    let page = null;
    if(this.state.page === 'homePage') {
      page = <HomePage />;
    } else if(this.state.page === 'aboutPage') {
      page = <About />;
    } else if(this.state.page === 'blogPage') {
      page = <Blog />;
    }

    return (
      <div className="App">
        <header className="App-header">
          <NavBar changePage={this.handleClick.bind(this)} />
        </header>
        <body>
          {page}
        </body>
      </div>
    );
  }
}

export default App;
