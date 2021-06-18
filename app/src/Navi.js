import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavbarText,
} from "reactstrap";
import CartSummary from "./CartSummary";
import { Link } from "react-router-dom";

const Navi = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <br />
      <Navbar color="light" expand="md">
        <NavbarBrand>
          <Link to="/">Northwind</Link>
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <NavbarText className="mr-auto"></NavbarText>
          <Nav navbar>
            <CartSummary
              cart={props.cart}
              removeFromCart={props.removeFromCart}
            />
          </Nav>
        </Collapse>
      </Navbar>
      <br />
    </div>
  );
};

export default Navi;
