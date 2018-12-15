import { push } from "connected-react-router";
import React, { Component } from "react";
import { connect } from "react-redux";
import { Button, Grid, Header, Segment } from "semantic-ui-react";

import LoginForm from "../forms/LoginForm";

class HomeLoginPage extends Component {
  submit = data => {
    console.log("====================================");
    console.log(data);
    console.log("====================================");
  };

  toSignin = () => this.props.push("/signup");
  toForgotPassword = () => this.props.push("/forgot_password");
  render() {
    return (
      <div>
        <Header>Bienvenue sur Matcha</Header>
        <LoginForm submit={this.submit} />
        <Segment raised={true}>
          <Grid columns={2}>
            <Grid.Column>
              <Button basic={true} onClick={this.toSignin}>
                S'inscrire
              </Button>
            </Grid.Column>
            <Grid.Column>
              <Button basic={true} onClick={this.toForgotPassword}>
                Mot de passe oublie ?
              </Button>
            </Grid.Column>
          </Grid>
        </Segment>
      </div>
    );
  }
}

export default connect(
  null,
  { push }
)(HomeLoginPage);
