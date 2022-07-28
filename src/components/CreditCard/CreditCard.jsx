import { Alert, IconButton } from "@mui/material";
import React from "react";
import Cards from "react-credit-cards";
import "react-credit-cards/es/styles-compiled.css";

import "../CreditCard/CreditCard.css";

export default class PaymentForm extends React.Component {
  state = {
    cvc: "",
    expiry: "",
    focus: "",
    name: "",
    number: "",
  };

  handleInputFocus = e => {
    this.setState({ focus: e.target.name });
  };

  handleInputChange = e => {
    const { name, value } = e.target;

    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="credit-card-block-main container">
        <div id="PaymentForm">
          <Cards
            cvc={this.state.cvc}
            expiry={this.state.expiry}
            focused={this.state.focus}
            name={this.state.name}
            number={this.state.number}
          />
          <form className="form-inp">
            <input
              className="form-card-inp-btn"
              type="tel"
              name="number"
              placeholder="Card Number"
              onChange={this.handleInputChange}
              onFocus={this.handleInputFocus}
            />
            <input
              className="form-card-inp-btn"
              type="tel"
              name="name"
              placeholder="Card Name"
              onChange={this.handleInputChange}
              onFocus={this.handleInputFocus}
            />
            <input
              className="form-card-inp-btn"
              type="tel"
              name="expiry"
              placeholder="Expiry"
              onChange={this.handleInputChange}
              onFocus={this.handleInputFocus}
            />
            <input
              className="form-card-inp-btn"
              type="tel"
              name="cvc"
              placeholder="cvc"
              onChange={this.handleInputChange}
              onFocus={this.handleInputFocus}
            />
            <IconButton>
              <a href="#" className="btn-sacc">
                <span>buy</span>
                <div class="liquid"></div>
              </a>
            </IconButton>
          </form>
        </div>
      </div>
    );
  }
}
