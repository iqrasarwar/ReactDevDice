import Header from "./containers/Header";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProductLisitng from "./containers/ProductListing"
import ProductDetails from "./containers/ProductDetails"
function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/"  element={<ProductLisitng />} />
          <Route path="/product/:productId"  element={<ProductDetails/>} />
          <Route> Error 404 ! Not Found</Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
