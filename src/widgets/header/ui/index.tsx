import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';
import cl from './style.module.css';
import { findPath } from '../lib/findPath';
import { HeaderProps } from '../interface';
import { RoutesEnum } from '../../../shared/const/routes';

export const Header: FC<HeaderProps> = ({ path }) => {
  return (
    <header className={cl.header}>
      <h1>{findPath(path)}</h1>
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
};

export default Header;
