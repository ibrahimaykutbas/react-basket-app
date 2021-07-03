import React, { Component } from "react";
import {
  Nav,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
  Badge,
} from "reactstrap";
import { Link } from "react-router-dom";

export default class CartSummary extends Component {
  renderSummary() {
    return (
      <div>
        <Nav navbar>
          <UncontrolledDropdown nav inNavbar>
            <DropdownToggle nav caret>
              Cart
            </DropdownToggle>
            <DropdownMenu right>
              {this.props.cart.map((cartItem) => (
                <DropdownItem key={cartItem.product.id}>
                  {cartItem.product.name}{" "}
                  <Badge color="info">{cartItem.quantity}</Badge>{" "}
                  <Badge
                    color="danger"
                    onClick={() => this.props.removeFromCart(cartItem.product)}
                  >
                    X
                  </Badge>
                </DropdownItem>
              ))}
              <DropdownItem divider />
              <DropdownItem>
                <Link to="/cart">Go to cart</Link>
              </DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
        </Nav>
      </div>
    );
  }

  renderEmpty() {
    return (
      <div>
        <NavbarText>Empty List</NavbarText>
      </div>
    );
  }

  render() {
    return (
      <div>
        {this.props.cart.length > 0 ? this.renderSummary() : this.renderEmpty()}
      </div>
    );
  }
}
