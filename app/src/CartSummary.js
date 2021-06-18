import React, { Component } from "react";
import {
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
  Badge,
  Button,
} from "reactstrap";
import { Link } from "react-router-dom";

export default class CartSummary extends Component {
  renderSummary() {
    return (
      <div>
        <UncontrolledDropdown nav inNavbar>
          <DropdownToggle nav caret>
            Cart
          </DropdownToggle>
          <DropdownMenu right>
            {this.props.cart.map((cartItem) => (
              <DropdownItem key={cartItem.product.id}>
                {cartItem.product.productName}{" "}
                <Badge color="primary">{cartItem.quantity}</Badge>{" "}
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
              <Link to="cart">Go to cart</Link>
            </DropdownItem>
          </DropdownMenu>
        </UncontrolledDropdown>
      </div>
    );
  }

  renderEmpty() {
    return (
      <div>
        <NavbarText>
          <Button color="danger" outline>
            Empty List
          </Button>
        </NavbarText>
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
