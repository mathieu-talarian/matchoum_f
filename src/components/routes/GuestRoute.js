import { push } from "connected-react-router";
import PropTypes from "prop-types";
import React from "react";
import { connect } from "react-redux";
import { Redirect, Route } from "react-router-dom";

const GuestRoute = ({
  isAuthenticated,
  routingPush,
  component: Component,
  // @ts-ignore
  ...rest
}) => {
  const toRet = props =>
    !isAuthenticated ? <Component {...props} /> : routingPush("/");

  return <Route {...rest} render={toRet} />;
};

GuestRoute.propTypes = {
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
)(GuestRoute);
