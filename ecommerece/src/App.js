import "./App.css";
import { BrowserRouter as Router, Switch,Route } from "react-router-dom";

import ProductListing from "./components/ProductListing";
import ProductDetails from "./components/ProductDetails";
import PageHeader from "./components/Header";

function App() {
  return (
    <div className="App">
      <Router>
      <PageHeader />
      <Switch>
      <Route path="/" exact component={ProductListing}/>
      <Route path="/product/:productId" exact component={ProductDetails}/>
      <Route>404 Not Found!!!</Route>
      </Switch>
      </Router>
    </div>
  );
}

export default App;
