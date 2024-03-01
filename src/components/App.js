import react from "react";
import { authService } from "./firebase/fbase";
import { useState, useEffect } from "react";

import Auth from "./Auth/Auth";
import Home from "./Home/Home";

import AppRouter from "./Router";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    authService.onAuthStateChanged(
      authService.getAuth(),
      (user) => {
        if (user) {
          setIsLoggedIn(true);
        }
        // setInit(true);
      },
      []
    );
    console.log(authService.getAuth().currentUser);
  });
  return (
    <div>
      <AppRouter isLoggedIn={isLoggedIn}></AppRouter>
    </div>
  );
};

export default App;
