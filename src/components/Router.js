import { Route, Routes, redirect } from "react-router-dom";

import Home from "./Home/Home";
import Auth from "./Auth/Auth";
import Discussion from "./Discussion/Disscussion";

const AppRouter = ({ isLoggedIn }) => {
  return (
    <Routes>
      <Route path="/" element={<Home></Home>} />
      <Route
        path="/auth"
        element={<Auth />}
        render={() => (isLoggedIn ? redirect("/") : <Auth />)}
      />
      <Route path="/discussion" element={<Discussion />} />
    </Routes>
  );
};

export default AppRouter;
