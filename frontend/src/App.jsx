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
import Policy from "./components/Policy";
import Terms from "./components/Terms";
import Contact from "./components/Contact";
import About from "./components/About";
import Payment from "./components/payment/Payment";
import Completion from "./components/Completion";
import Dashboard from "./pages/dashboard/Dashboard";
import Users from "./pages/dashboard/Users";
import Settings from "./pages/dashboard/Settings";
import DashboardMain from "./pages/dashboard/DashboardMain";
import Location from "./pages/Location/Location";
import Profile from "./components/profile/Profile";

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
        <Route path="/policy" element={<Policy />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/completion" element={<Completion />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<Profile />} />
        {/* it should be private route */}
        <Route element={<PrivateRoute />}>
          <Route path="/dashboard" element={<Dashboard />}>
            <Route path="/dashboard/" element={<DashboardMain />} />
            <Route path="/dashboard/users" element={<Users />} />
            <Route path="/dashboard/settings" element={<Settings />} />
          </Route>
        </Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
