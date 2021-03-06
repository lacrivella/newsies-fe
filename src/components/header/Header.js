import React from 'react';
import { useAuth0 } from '../../Auth0Provider';
import LandingWrapper from './LandingWrapper';
import MyViewWrapper from './MyViewWrapper';
import styles from './Header.css';
import logo from '../../assets/logo.png';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function Header({ location }) {
  const { isAuthenticated } = useAuth0();
  
  return (
    <>
    <div className={styles.header}>
      <Link to={'/'}>
        <img className={styles.logo} src={logo} alt="Newzie_logo"/>
      </Link>
      {!isAuthenticated ? <LandingWrapper /> : <MyViewWrapper location={location} />}
    </div>
    </>
  );
}

Header.propTypes = {
  location: PropTypes.object
};
