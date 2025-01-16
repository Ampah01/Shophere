import Category from "./Component/Category/Category";
import Header from "./Component/Header/Header";
import MainHeader from "./Component/Header/MainHeader";
import { useSelector } from "react-redux";
import './app.css';
import DiscountBanner from "./Component/Banner/Banner";

const App = () => {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  return (
    <div className="bg-white min-h-screen">
      <div className="container mx-auto">
        <MainHeader isLoggedIn={isLoggedIn} />
        <Header isLoggedIn={isLoggedIn} />
        <hr />
        <Category />
        <DiscountBanner
        />
      </div>
    </div>
  );
};

export default App;
