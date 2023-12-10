import { Row, Col } from "react-bootstrap";
import Product from "../components/Product";
//import products from "../products";
import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";

const HomePage = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchProducts = async() => {
      const {data} = await axios.get("/api/products");
      setProducts(data);
    };
    fetchProducts();
  }, []);
  return (
  <React.Fragment>
        <h2>Latest Products</h2>
        <Row>
            {products.map((product) =>(
                <Col key={product._id} sm={12} md={6} lg={4} xl = {3}>
                {/* <h3>{product.name}</h3> */}
                <Product product={product}/>
                </Col>
            ))}
        </Row>
  </React.Fragment>
  )
};

export default HomePage;
