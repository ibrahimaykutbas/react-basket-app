import React, { useState } from "react";
import CartSummary from "./CartSummary";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavbarText,
} from "reactstrap";
import { Link } from "react-router-dom";

const Navi = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <br />
      <Navbar color="light" light expand="md">
        <NavbarBrand>
          <Link to="/">Northwind</Link>
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar></Nav>
          <CartSummary
            cart={props.cart}
            removeFromCart={props.removeFromCart}
          />
        </Collapse>
      </Navbar>
      <br />
    </div>
  );
};

export default Navi;
