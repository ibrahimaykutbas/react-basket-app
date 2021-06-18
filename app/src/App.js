import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import CategoryList from "./CategoryList";
import ProductList from "./ProductList";
import Navi from "./Navi";
import alertify from "alertifyjs";
import { Switch, Route } from "react-router-dom";
import CartList from "./CartList";
import NotFound from "./NotFound";

export default class App extends Component {
  state = { currentCategory: "All", products: [], cart: [] };

  componentDidMount() {
    this.getProducts();
  }

  changeCategory = (category) => {
    this.setState({ currentCategory: category.categoryName });
    this.getProducts(category.id);
  };

  getProducts = (categoryId) => {
    let url = "http://localhost:3000/products";
    if (categoryId) {
      url += "?categoryId=" + categoryId;
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
    alertify.success(product.productName + " added to cart!", 2);
  };

  removeFromCart = (product) => {
    let newCart = this.state.cart.filter((p) => p.product.id !== product.id);
    this.setState({ cart: newCart });
    alertify.error(product.productName + " removed from cart!", 2);
  };

  render() {
    let categoryInfo = { title: "Category List" };
    let productInfo = { title: "Product List" };
    return (
      <div>
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

              <Route path="/cart">
                <Col xs="12">
                  <CartList
                    cart={this.state.cart}
                    removeFromCart={this.removeFromCart}
                  />
                </Col>
              </Route>

              <Route path="">
                <Col xs="12">
                  <NotFound />
                </Col>
              </Route>
            </Switch>
          </Row>
        </Container>
      </div>
    );
  }
}
