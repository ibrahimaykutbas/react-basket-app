import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import alertify from "alertifyjs";
import { Switch, Route } from "react-router-dom";

import CategoryList from "./CategoryList";
import ProductList from "./ProductList";
import Navi from "./Navi";
import NotFound from "./NotFound";
import CartList from "./CartList";

export default class App extends Component {
  state = { currentCategory: "All", products: [], cart: [] };

  changeCategory = (category) => {
    this.setState({ currentCategory: category.name });
    this.getProducts(category.id);
  };

  componentDidMount() {
    this.getProducts();
  }

  getProducts = (category) => {
    let url = "https://northwind.vercel.app/api/products";
    if (category) {
      url += "?categoryId=" + category;
    }
    fetch(url)
      .then((response) => response.json())
      .then((data) => this.setState({ products: data }));
  };

  addToCart = (product) => {
    let newCart = this.state.cart;
    let addedItem = newCart.find((p) => p.product.id === product.id);
    if (addedItem) {
      addedItem.quantity += 1;
    } else {
      newCart.push({ product: product, quantity: 1 });
    }
    this.setState({ cart: newCart });
    alertify.success(product.name + " added to cart!", 2);
  };

  increaseTheProduct = (product) => {
    let newCart = this.state.cart;
    let addedItem = newCart.find((p) => p.product.id === product.id);
    if (addedItem) {
      addedItem.quantity += 1;
    }
    this.setState({ cart: newCart });
  };

  reduceProduct = (product) => {
    let newCart = this.state.cart;
    let addedItem = newCart.find((p) => p.product.id === product.id);
    if (addedItem) {
      if (addedItem.quantity < 2) {
        alertify.error("The amount of product must be at least 1.", 2);
      } else {
        addedItem.quantity -= 1;
      }
    }
    this.setState({ cart: newCart });
  };

  removeFromCart = (product) => {
    let newCart = this.state.cart.filter((p) => p.product.id !== product.id);
    this.setState({ cart: newCart });
    alertify.error(product.name + " removed from cart!", 2);
  };

  render() {
    let categoryInfo = { title: "Category List" };
    let productInfo = { title: "Product List" };

    return (
      <Container>
        <Navi cart={this.state.cart} removeFromCart={this.removeFromCart} />
        <Row>
          <Switch>
            <Route exact path="/">
              <Col xs="4">
                <CategoryList
                  info={categoryInfo}
                  currentCategory={this.state.currentCategory}
                  changeCategory={this.changeCategory}
                />
              </Col>

              <Col xs="8">
                <ProductList
                  info={productInfo}
                  currentCategory={this.state.currentCategory}
                  products={this.state.products}
                  addToCart={this.addToCart}
                />
              </Col>
            </Route>

            <Route exact path="/cart">
              <Col xs="12">
                <CartList
                  cart={this.state.cart}
                  removeFromCart={this.removeFromCart}
                  increaseTheProduct={this.increaseTheProduct}
                  reduceProduct={this.reduceProduct}
                />
              </Col>
            </Route>
            <Route>
              <Col xs="12">
                <NotFound />
              </Col>
            </Route>
          </Switch>
        </Row>
      </Container>
    );
  }
}
