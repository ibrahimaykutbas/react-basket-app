import React, { Component } from "react";
import { ListGroup, ListGroupItem, Badge } from "reactstrap";

export default class CategoryList extends Component {
  state = { categories: [] };

  componentDidMount() {
    this.getCategories();
  }

  getCategories = () => {
    let url = "https://northwind.vercel.app/api/categories";
    fetch(url)
      .then((response) => response.json())
      .then((data) => this.setState({ categories: data }));
  };

  render() {
    return (
      <div>
        <h2>
          <Badge color="primary">{this.props.info.title}</Badge>
        </h2>
        <ListGroup>
          {this.state.categories.map((category) => (
            <ListGroupItem
              key={category.id}
              onClick={() => this.props.changeCategory(category)}
              active={
                this.props.currentCategory === category.name ? true : false
              }
            >
              {category.name}
            </ListGroupItem>
          ))}
        </ListGroup>
      </div>
    );
  }
}
