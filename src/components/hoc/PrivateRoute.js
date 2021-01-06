import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';
import { unauthRedirect } from '../../redux/user/user.actions';
import { setAlert } from '../../redux/alert/alert.actions';

const PrivateRoute = ({
  component: Component,
  isAuthenticated,
  unauthRedirect,
  setAlert,
  ...rest
}) => {
  return (
    <Route
      {...rest}
      render={props => {
        if (!isAuthenticated) {
          unauthRedirect();
          setAlert(
            'auth-msg-fail',
            'Must be authenticated to access that page!',
            5000,
          );
          return <Redirect to="/auth" />;
        } else {
          return <Component {...props} />;
        }
      }}
    ></Route>
  );
};

PrivateRoute.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  unauthRedirect: PropTypes.func.isRequired,
  setAlert: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  isAuthenticated: state.user.isAuthenticated,
});

export default connect(mapStateToProps, { unauthRedirect, setAlert })(
  PrivateRoute,
);
