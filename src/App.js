import { Fragment } from "react";
import Counter from "./components/Counter";
import Header from "./components/Header";
import Auth from "./components/Auth";
import UserProfile from "./components/UserProfile";
import { useSelector } from "react-redux";

function App() {
  const isLoggedIn = useSelector(state => state.auth.logged);
  console.log(isLoggedIn);
  return (
    <Fragment>
      <Header />
      {!isLoggedIn ? <Auth /> : <UserProfile />}
      <Counter />
    </Fragment>
  );
}

export default App;
