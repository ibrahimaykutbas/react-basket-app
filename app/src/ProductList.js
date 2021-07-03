import React, { Component } from "react";
import { Table, Button, Badge } from "reactstrap";

export default class ProductList extends Component {
  render() {
    return (
      <div>
        <h2>
          <Badge color="primary">{this.props.info.title}</Badge> -{" "}
          <Badge color="warning">{this.props.currentCategory}</Badge>
        </h2>
        <Table hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Product Name</th>
              <th>Unit Price</th>
              <th>Units In Stock</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {this.props.products.map((product) => (
              <tr key={product.id}>
                <th scope="row">{product.id}</th>
                <td>{product.name}</td>
                <td>{product.unitPrice}</td>
                <td>{product.unitsInStock}</td>
                <td>
                  <Button
                    color={product.unitsInStock > 0 ? "primary" : "danger"}
                    outline
                    onClick={() => this.props.addToCart(product)}
                    disabled={product.unitsInStock > 0 ? false : true}
                  >
                    {product.unitsInStock > 0 ? "Add" : "OoS"}
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    );
  }
}
