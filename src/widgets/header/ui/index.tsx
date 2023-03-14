import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import cl from './style.module.css';
import { RoutesEnum } from '../../../shared/const/routes';

interface HeaderProps {
  path: string;
}

export class Header extends Component<HeaderProps> {
  shouldComponentUpdate(nextProps: Readonly<HeaderProps>): boolean {
    if (this.props.path !== nextProps.path) {
      return true;
    }
    return false;
  }
  render() {
    return (
      <header className={cl.header}>
        <h1>{Object.entries(RoutesEnum).find((item) => item[1] === this.props.path)?.[0]}</h1>
        <nav className={cl.nav}>
          <NavLink className={({ isActive }) => (isActive ? cl.active : '')} to={RoutesEnum.Main}>
            Main
          </NavLink>
          <NavLink className={({ isActive }) => (isActive ? cl.active : '')} to={RoutesEnum.About}>
            About us
          </NavLink>
        </nav>
      </header>
    );
  }
}

export default Header;
