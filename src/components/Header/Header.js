import react from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import womenIcon from "../../Assets/womenIcon.png";
import { useState, useEffect } from "react";
import { authService } from "../firebase/fbase";
import { collection } from "firebase/firestore";

const Header = () => {
  const [userStatus, setUserStatus] = useState("notLogged");

  useEffect(() => {
    authService.onAuthStateChanged(
      authService.getAuth(),
      (user) => {
        if (user) {
          setUserStatus("alreadyLogged");
        }
        // setInit(true);
      },
      []
    );
  });

  const logout = () => {
    authService.signOut(authService.getAuth());

    window.location.reload();
    // console.log(authService.getAuth().currentUser);
  };
  return (
    <div className="header">
      <Link to="/">
        <div style={{ color: "white" }}>
          THE <span className="header-mid">PRODUCT</span> COMPANY
        </div>
      </Link>
      <div className="header-sub">
        <div className="header-sub-action">Learn&lt;</div>
        <div className="header-sub-action">Practice&lt;</div>
        <div>
          {userStatus === "notLogged" ? (
            <Link to="/auth">LOGIN / SIGN UP</Link>
          ) : (
            <div onClick={logout} className="Header-Component">
              <img src={womenIcon} className="user"></img>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
