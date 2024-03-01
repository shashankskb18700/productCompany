import react, { useState } from "react";

import UserResponseSuggestion from "../UserResponse/UserResponseSuggestion";
import UserResponseReport from "../UserResponse/UserResponseReport";
import UserResponseFeedback from "../UserResponse/UserResponseFeedback";

import unActive from "../../Assets/unActive.svg";
import active from "../../Assets/active.svg";
import ContactUS from "../../Assets/contactUs.svg";
import suggestion from "../../Assets/suggestion.svg";
import ReportAnIssue from "../../Assets/reportAnIssue.svg";
import shareFeedback from "../../Assets/shareFeedback.svg";

import "./FloatingButton.css";
const FloatingButton = () => {
  const [button, setButton] = useState(false);
  const [feature, setFeature] = useState(false);
  const [currentView, setCurrentView] = useState("");

  const Card = (e) => {
    // setButton(!button);
    setCurrentView(e.target.alt);
    // console.log("cliccked");
    // console.log(e.target.alt);
  };

  console.log(feature);
  return (
    <div className="Floating-wrap">
      {feature ? (
        currentView == "reportAnIssue" ? (
          <UserResponseReport className="us"></UserResponseReport>
        ) : (
          ""
        )
      ) : (
        <div></div>
      )}
      {feature ? (
        currentView == "suggestion" ? (
          <UserResponseSuggestion className="us"></UserResponseSuggestion>
        ) : (
          ""
        )
      ) : (
        <div></div>
      )}

      {feature ? (
        currentView == "contactUs" ? (
          <UserResponseFeedback className="us"></UserResponseFeedback>
        ) : (
          ""
        )
      ) : (
        <div></div>
      )}
      <div className={feature ? "FloatingButtonRotated" : "FloatingButton"}>
        <div className={button ? "FB-sub" : "FB-hide"}>
          <img
            src={ContactUS}
            onClick={(e) => {
              Card(e);

              setFeature(true);
            }}
            alt="contactUs"
          ></img>
        </div>
        <div className={button ? "FB-sub" : "FB-hide"}>
          <img
            src={suggestion}
            onClick={(e) => {
              Card(e);
              setFeature(true);
            }}
            alt="suggestion"
          ></img>
        </div>
        <div className={button ? "FB-sub" : "FB-hide"}>
          <img
            src={shareFeedback}
            onClick={(e) => {
              Card(e);
              setFeature(true);
            }}
            alt="shareFeedback"
          ></img>
        </div>
        <div className={button ? "FB-sub" : "FB-hide"}>
          <img
            src={ReportAnIssue}
            onClick={(e) => {
              Card(e);
              setFeature(true);
            }}
            alt="reportAnIssue"
          ></img>
        </div>
        <div
          onClick={() => {
            if (feature == true) {
              setFeature(false);
            }
            setButton(!button);
          }}
          className="FB"
        >
          <img src={button ? active : unActive}></img>
        </div>
      </div>
    </div>
  );
};

export default FloatingButton;
