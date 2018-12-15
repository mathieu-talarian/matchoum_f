import { push } from "connected-react-router";
import PropTypes from "prop-types";
import React from "react";
import { connect } from "react-redux";
import { Redirect, Route } from "react-router-dom";

const UserRoute = ({
  isAuthenticated,
  routingPush,
  component: Component,
  ...rest
}) => {
  if (!isAuthenticated) {
    routingPush("/guest");
    return <div />;
  }
  const toRet = props => <Component {...props} />;
  return <Route {...rest} render={toRet} />;
};

UserRoute.propTypes = {
  component: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool.isRequired
};

function mapStateToProps(state) {
  return {
    isAuthenticated: !!state.user.token
  };
}

export default connect(
  mapStateToProps,
  { routingPush: push }
)(UserRoute);
