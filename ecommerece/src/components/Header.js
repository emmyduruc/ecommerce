import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {insertCart} from "../redux/actions/productAction";
import {
  Card,
  Button,
  Input,
  Header,
  Label,
  Icon,
  Image,
} from "semantic-ui-react";

const PageHeader = () => {
  const products = useSelector((state) => state.allProducts.products);
  console.log("stateProducts", products)
  // const dispatch = useDispatch();
  // const { id, title, image, price, category } = product;
  // const insert = () => dispatch(insertCart(products));
  return (
    <div>
      <div>
        <Header
          as="h2"
          style={{
            marginBottom: "80px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div style={{ display: "flex", alignItems: "center" }}>
            <Image
              width="100"
              height=""
              circular
              src="https://react.semantic-ui.com/images/avatar/large/patrick.png"
            />{" "}
            <span>
              AM<em>Mini-Store</em>
            </span>
          </div>

          <div class="ui left action input">
            <button class="ui teal icon left labeled button">
              <i
                aria-hidden="true"
                class="cart icon"
                style={{ color: "red", fontSize: "20px" }}
              ></i>
              <span>Checkout</span>
            </button>
            <button class="ui teal icon left labeled button">
              <i
                aria-hidden="true"
                class="heart icon"
                style={{ color: "red", fontSize: "20px" }}
              ></i>
            </button>
            <input type="text" placeholder="Search..." />
          </div>
          {/* <Input
            action={{
              color: "teal",
              labelPosition: "right",
              icon: "cart",
              // icon:"heart",
              content: "Checkout",
            }}
            actionPosition="right"
            //  icon:"heart",
            placeholder="Search..."
            defaultValue="52.03"
          /> */}
          {/* <Icon name=" cart arrow down" /> */}
        </Header>
      </div>
    </div>
  );
};

export default PageHeader;
