import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import ProductDetail from "./components/ProductDetail/ProductDetail"
import PageNotFound from "./components/PageNotFound/PageNotFound"
import Footer from "./components/Footer/Footer"


function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
        <Routes>
          <Route path="/"  element={<Home/>}/>
          <Route path="/product/:id" element={<ProductDetail/>}/>
          <Route component={<PageNotFound/>}/>
        </Routes>
       {/*  <Footer></Footer> */}
      </Router>
    </div>
  );
}

export default App;
