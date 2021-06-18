import React, { Component } from "react";
import { Table, Button } from "reactstrap";

export default class CartList extends Component {
  renderCart() {
    return (
      <tbody>
        {this.props.cart.map((cartItem) => (
          <tr key={cartItem.product.id}>
            <th scope="row">{cartItem.product.id}</th>
            <td>{cartItem.product.productName}</td>
            <td>{cartItem.quantity}</td>
            <td>{cartItem.product.unitPrice} $</td>
            <td>{cartItem.product.unitPrice * cartItem.quantity} $</td>
            <td>
              <Button
                color="danger"
                onClick={() => this.props.removeFromCart(cartItem.product)}
              >
                X
              </Button>
            </td>
          </tr>
        ))}
      </tbody>
    );
  }

  renderEmpty() {
    return (
      <tbody>
        <tr>
          <td colSpan="6" align="center">
            <h2>Empty List</h2>
          </td>
        </tr>
      </tbody>
    );
  }

  render() {
    return (
      <div>
        <Table hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Product Name</th>
              <th>Quantity</th>
              <th>Unit Price</th>
              <th>Line Total</th>
              <th></th>
            </tr>
          </thead>
          {this.props.cart.length > 0 ? this.renderCart() : this.renderEmpty()}
        </Table>
      </div>
    );
  }
}
