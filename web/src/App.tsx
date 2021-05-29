import { BrowserRouter as Brower, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Services from "./pages/Services";
import SignUp from "./pages/SignUp";
import GlobalStyle from "./styles/globalStyles";
import Footer from "./components/Footer";

function App() {
  return (
    <Brower>
      <GlobalStyle />
      <Navbar />
      <Switch>
        <Route exact path="/" component={ Home } />
        <Route path="/services" component={ Services } />
        <Route path="/products" component={ Products } />
        <Route path="/signup" component={ SignUp } />
      </Switch>
      <Footer />
    </Brower>
  );
}

export default App;
