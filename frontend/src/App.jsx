import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Category from "./pages/category/Category";
import Cart from "./pages/cart/Cart";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import CategoryProduct from "./components/categories/CategoryProduct";
import PrivateRoute from "./components/PrivateRoute";
import Profile from "./components/profile/Profile";
import Test from "./pages/test/Test";
// import Test from "./pages/test/Test";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/category" element={<Category />} />
        <Route path="/category/:id" element={<CategoryProduct />} />
        <Route path="/login" element={<Login />} />
        <Route path="/test" element={<Test />} />
        <Route element={<PrivateRoute />}>
          <Route path="/profile" element={<Profile />} />
        </Route>
        <Route path="/register" element={<Register />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
