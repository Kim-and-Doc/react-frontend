import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';
import { unauthRedirect } from '../../redux/user/user.actions';

const PrivateRoute = ({
  component: Component,
  isAuthenticated,
  unauthRedirect,
  ...rest
}) => {
  return (
    <Route
      {...rest}
      render={props => {
        if (!isAuthenticated) {
          unauthRedirect();
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
};

const mapStateToProps = state => ({
  isAuthenticated: state.user.isAuthenticated,
});

export default connect(mapStateToProps, { unauthRedirect })(PrivateRoute);
