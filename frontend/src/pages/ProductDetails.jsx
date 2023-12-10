import React from 'react';
import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import {Row, Col, Image, Card, Button, ListGroup} from "react-bootstrap";
import { Link } from 'react-router-dom';
import Rating from '../components/Rating';
//import products from "../products";
import axios  from 'axios';

const ProductDetails = () => {
    // const { id: productId} = useParams(); // react hooks
    // const product = products.find((p) => p._id === productId);
    //console.log(product);
    const [product, setProduct] = useState({});
    const {id: productId } = useParams();
    useEffect(() => {
        const fetchProduct = async() => {
          const { data } = await axios.get(`/api/products/${productId}`);
          setProduct(data);
        }
        fetchProduct();
    }, [productId])

  return (
    <React.Fragment>
     <Link className='btn btn-light my-3' to="/">Go Back</Link>
     <Row>
      <Col md={4}>
        <Image src={product.image} alt={product.name} fluid></Image>
      </Col>
      <Col md={4}>
        <ListGroup>
          <ListGroup.Item>
            <h2>{product.name}</h2>
          </ListGroup.Item>
           <ListGroup.Item>
            <Rating value={product.rating} text={`${product.numReviews} review`}></Rating>
          </ListGroup.Item>
           <ListGroup.Item>
            Price: ${product.price}
          </ListGroup.Item>
          <ListGroup.Item>
            <p>{product.description}</p>
          </ListGroup.Item>
        </ListGroup>
      </Col>
      <Col md={4}>
        <Card>
          <ListGroup>
            <ListGroup.Item>
              <Row>
                <Col>Price:</Col>
                <Col><b>${product.price}</b></Col>
              </Row>
            </ListGroup.Item>
            <ListGroup.Item>
              <Row>
                <Col>Avaibility:</Col>
                <Col>
                <b>
                  {product.countInStock > 0 ? "In Stock" : "Out of Stock"}
                </b>
                </Col>
              </Row>
            </ListGroup.Item>
            <ListGroup.Item>
              <Button className='btn btn-block' type='button' disabled={product.countInStock === 0}>
                Add to Cart
              </Button>
            </ListGroup.Item>
          </ListGroup>
        </Card>
      </Col>
     </Row>
    </React.Fragment>

  )
}

export default ProductDetails