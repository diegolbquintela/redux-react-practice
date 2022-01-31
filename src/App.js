import { Fragment, useState } from "react";

import Counter from "./components/Counter";
import Header from "./components/Header";
import Auth from "./components/Auth";
import UserProfile from "./components/UserProfile";

function App() {
  const [isLogged, setIsLogged] = useState(false);

  const loginHandler = (e) => {
    console.log("logged from app");
    setIsLogged(true);
  };
  const logoutHandler = (e) => {
    console.log("logout from app");
    setIsLogged(false);
  };

  return (
    <Fragment>
      <Header onLogout={logoutHandler} />
      {!isLogged && <Auth onLogin={loginHandler} />}
      {isLogged && <UserProfile />}
      <Counter />
    </Fragment>
  );
}

export default App;
