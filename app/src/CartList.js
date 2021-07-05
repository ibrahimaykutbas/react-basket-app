import React, { Component } from "react";
import { Table, Button, Badge } from "reactstrap";
import alertify from "alertifyjs";

export default class CartList extends Component {
  renderCartList() {
    return (
      <tbody>
        {this.props.cart.map((cartItem) => (
          <tr key={cartItem.product.id}>
            <th scope="row">{cartItem.product.id}</th>
            <td>{cartItem.product.name}</td>
            <td>{cartItem.product.unitPrice}</td>
            <td>
              {cartItem.quantity}{" "}
              <Button
                size="sm"
                color="primary"
                onClick={() => this.props.increaseTheProduct(cartItem.product)}
              >
                +
              </Button>{" "}
              <Button
                size="sm"
                color="danger"
                onClick={() => this.props.reduceProduct(cartItem.product)}
              >
                -
              </Button>
            </td>
            <td>{cartItem.product.unitPrice * cartItem.quantity}</td>
            <td>
              <Button
                color="danger"
                outline
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

  renderEmptyList() {
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
              <th>Unit Price</th>
              <th>Quantity</th>
              <th>Total Line</th>
              <th></th>
            </tr>
          </thead>
          {this.props.cart.length > 0
            ? this.renderCartList()
            : this.renderEmptyList()}
        </Table>
      </div>
    );
  }
}
