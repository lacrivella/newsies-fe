import React from 'react';
import SearchBar from '../searchBar/SearchBar';
import { useAuth0 } from '../../Auth0Provider';
import styles from './LandingWrapper.css';

export default function LandingWrapper() {
  const { auth0Client } = useAuth0();
  const login = () => auth0Client.loginWithRedirect();
  
  return (
    <div className={styles.container}>
      <SearchBar />
      <button onClick={login}>Sign-in | Sign-up</button>
    </div>
  );
}