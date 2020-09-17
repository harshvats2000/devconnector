import React from 'react';
import { Link } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import { logout } from '../../actions/auth';
import { connect } from 'react-redux';

const Navbar = ({ auth: { isAuthenticated, loading }, logout }) => {
  const authLinks = (
    <div>
      <ul>
        <li>
          <a onClick={logout} href='#!'>
            <i className='fas fa-sign-out-alt'>
              {' '}
              <span className='hide-sm'>Logout</span>
            </i>
          </a>
        </li>
      </ul>
    </div>
  );

  const guestLinks = (
    <ul>
      <li>
        <Link to='#!'>Developers</Link>
      </li>
      <li>
        <Link to='/register'>Register</Link>
      </li>
      <li>
        <Link to='/login'>Login</Link>
      </li>
    </ul>
  );

  return (
    <nav className='navbar bg-dark'>
      <h1>
        <Link to='/'>
          <i className='fas fa-code'></i> DevConnector
        </Link>
      </h1>
      {!loading && <>{isAuthenticated ? authLinks : guestLinks}</>}
    </nav>
  );
};

Navbar.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { logout })(Navbar);
