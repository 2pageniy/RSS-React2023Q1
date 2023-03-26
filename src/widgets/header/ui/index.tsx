import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import cl from './style.module.css';
import { findPath } from '../lib/findPath';
import { HeaderProps } from '../interface';
import { RoutesEnum } from '../../../shared/const/routes';

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
        <h1>{findPath(this.props.path)}</h1>
        <nav className={cl.nav}>
          <NavLink className={({ isActive }) => (isActive ? cl.active : '')} to={RoutesEnum.Main}>
            Main
          </NavLink>
          <NavLink className={({ isActive }) => (isActive ? cl.active : '')} to={RoutesEnum.About}>
            About us
          </NavLink>
          <NavLink className={({ isActive }) => (isActive ? cl.active : '')} to={RoutesEnum.Form}>
            Form
          </NavLink>
        </nav>
      </header>
    );
  }
}

export default Header;
