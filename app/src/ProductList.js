import React, { Component } from "react";
import { Table, Button, Badge } from "reactstrap";

export default class ProductList extends Component {
  render() {
    return (
      <div>
        <Badge color="primary" pill>
          <h4>{this.props.info.title}</h4>
        </Badge>{" "}
        <Badge color="warning" pill>
          <h4>{this.props.currentCategory}</h4>
        </Badge>
        <br /> <br />
        <Table hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Product Name</th>
              <th>Quantity Per Unit</th>
              <th>Units In Stock</th>
              <th>Unit Price</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {this.props.products.map((product) => (
              <tr key={product.id}>
                <th scope="row">{product.id}</th>
                <td>{product.productName}</td>
                <td>{product.quantityPerUnit}</td>
                <td>{product.unitsInStock}</td>
                <td>{product.unitPrice} $</td>
                <td>
                  <Button
                    color={product.unitsInStock > 0 ? "primary" : "danger"}
                    outline
                    onClick={() => this.props.addToCart(product)}
                    disabled={product.unitsInStock > 0 ? false : true}
                  >
                    {product.unitsInStock > 0 ? "Add" : "OoS"}{" "}
                    {/* Out of stock */}
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
