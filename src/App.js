import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(){
    super()
    this.state = {
      toggle: false,
      navHeight: 0
    }
  }
 
 
  toggleNav = () => {
    this.setState({
      navHeight: !this.state.navHeight ? 240 : 0
    })
  }

  

  render() {
    return (
      <div className="App">
        <nav className="navbar">
          <h1>Start Bootstrap</h1>
          <div>
            <span className='menuBurger' onClick={this.toggleNav}>MENU &#9776;</span>
            <div className={this.state.toggle ? "bigList nav-height" : "bigList" } >
          <ul>
              <li><a href="#/">SERVICES</a></li>
              <li><a href="#/">PORTFOLIO</a></li>
              <li><a href="#/">ABOUT</a></li>
              <li><a href="#/">TEAM</a></li>
              <li><a href="#/">CONTACT</a></li>
          </ul>
        </div>
          </div>
        </nav>
        <div className="menuList" 
        style={{height: this.state.navHeight}}
        >
          <ul>
              <li><a href="#/">SERVICES</a></li>
              <li><a href="#/">PORTFOLIO</a></li>
              <li><a href="#/">ABOUT</a></li>
              <li><a href="#/">TEAM</a></li>
              <li><a href="#/">CONTACT</a></li>
          </ul>
        </div>
        <div className="main">
          <h3><em>Welcome To Our Studio!</em></h3>
          <h1>IT'S NICE TO MEET YOU</h1>
          <button>TELL ME MORE</button>
        </div>
      </div>
    );
  }
}

export default App;
