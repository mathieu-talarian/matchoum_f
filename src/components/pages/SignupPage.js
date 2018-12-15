import { push } from "connected-react-router";
import React, { Component } from "react";
import { connect } from "react-redux";
import { Button, Header } from "semantic-ui-react";
import SignupForm from "../forms/SignupForm";

class SignupPage extends Component {
  submit = data => {
    console.log("====================================");
    console.log(data);
    console.log("====================================");
  };
  returnToLogin = () => this.props.push("/");

  render() {
    return (
      <div>
        <Button
          circular={true}
          icon="left arrow"
          onClick={this.returnToLogin}
        />
        <Header>Inscription</Header>
        <SignupForm submit={this.submit} />
      </div>
    );
  }
}

export default connect(
  null,
  { push }
)(SignupPage);
