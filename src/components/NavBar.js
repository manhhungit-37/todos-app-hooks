import React, { useContext } from 'react';
import { AuthorizedContext } from '../contexts/AuthorizedContext';
import { ThemeContext } from '../contexts/ThemeContext';
import { HANDLE_LOGGED } from '../reducers/types';

function NavBar() {
  const { theme } = useContext(ThemeContext);
  const { authorized, dispatchAuthor } = useContext(AuthorizedContext);

  function handleLogged() {
    dispatchAuthor({
      type: HANDLE_LOGGED
    })
  }

  return (
    <div className={theme.isLightTheme ? "light" : "dark"}>
      <h1 className="header-title">My Hooks App</h1>
      <ul className="nav-bar">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        {authorized.isAuthorized ? (
          <div>
            You are logged in<a href="#" onClick={handleLogged} >Logout</a>
          </div>
        ) : (
          <div>
            <a href="#" onClick={handleLogged} >Login</a>
          </div>
        )}
        
      </ul>
      <div>
        <div></div>
      </div>
    </div>
  );
}

export default NavBar;