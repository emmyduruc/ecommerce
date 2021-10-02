import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Card, Button, Label, Icon, Image } from "semantic-ui-react";
import { Link } from "react-router-dom";
import {insertCart} from "../redux/actions/productAction";

const ProductComponents = () => {
  const products = useSelector((state) => state.allProducts.products);
  const dispatch = useDispatch();
  const insert = () => dispatch(insertCart(products));
//   console.log("insert",insert);
  //   const { id, title } = products[0];
  const renderProducts = products.map((product) => {
         const { id, title, image, price, category } = product;
         
    
    return (
      <Card key={id} style={{ margin: "10px" }}>
        <Link to={`/product/${id}`}>
          <Image src={image} height={350} />
          <Card.Content>
            <Card.Header>${category}</Card.Header>
            <Card.Meta>
              <span className="date">${price}</span>
            </Card.Meta>
            <Card.Description>{title}</Card.Description>
          </Card.Content>
          </Link>
          <Card.Content extra>
            <Button as="div" labelPosition="right">
              <Button color="red">
                <Icon name="heart" />
                Like
              </Button>
              <Label as="a" basic color="red" pointing="left">
                <div className="visible content" onClick = {insert}>Add to Cart</div>
              </Label>
              
            </Button>
          </Card.Content>
        
      </Card>
      
    );
  });
  return <>{renderProducts}</>;
};

export default ProductComponents;

//       <div className="four column wide " key={id}>
      //         <div className="ui link cards">
      //           <div className="card">
      //             <div className="image">
      //               <img src={image} alt="product image" />
      //             </div>
      //             <div className="content">
      //               <div className="header">{title}</div>
      //               <div className="meta price">${price}</div>
      //               <div className="meta ">${category}</div>
      //             </div>
      //           </div>
      //         </div>
      //       </div>