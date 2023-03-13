import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import cl from './style.module.css';
import { ABOUT_PAGE, MAIN_PAGE } from '../../../shared/const/routes';

export class Header extends Component {
  render() {
    return (
      <header className={cl.header}>
        <Link to={MAIN_PAGE}>Main</Link>
        <Link to={ABOUT_PAGE}>About us</Link>
      </header>
    );
  }
}

export default Header;
