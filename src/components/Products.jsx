import React from "react";
import { Button } from "@material-ui/core";

const Products = props => {
  const { history } = props;
  return (
    <>
      <Button onClick={() => history.push("/products/computers")}>Computers</Button>
      <Button onClick={() => history.push("/products/telephones")}>Telephones</Button>
      <Button onClick={() => history.push("/products/consoles")}>Consoles</Button>
    </>
  );
};

export default Products;
