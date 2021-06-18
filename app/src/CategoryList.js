import React, { Component } from "react";
import { ListGroup, ListGroupItem, Badge } from "reactstrap";

export default class CategoryList extends Component {
  state = { categories: [] };

  componentDidMount() {
    this.getCategories();
  }

  getCategories = () => {
    fetch("http://localhost:3000/categories")
      .then((response) => response.json())
      .then((data) => this.setState({ categories: data }));
  };

  render() {
    return (
      <div>
        <Badge color="primary" pill>
          <h4>{this.props.info.title}</h4>
        </Badge>{" "}
        <br /> <br />
        <ListGroup>
          {this.state.categories.map((category) => (
            <ListGroupItem
              key={category.id}
              onClick={() => this.props.changeCategory(category)}
              active={
                this.props.currentCategory === category.categoryName
                  ? true
                  : false
              }
            >
              {category.categoryName}
            </ListGroupItem>
          ))}
        </ListGroup>
      </div>
    );
  }
}
