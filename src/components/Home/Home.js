import { Link } from "react-router-dom";

import Header from "../Header/Header";
import Question from "../Questions/Question";

import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <Header></Header>
      <div className="content">
        <div className="home-header">Practice Interview Question</div>
        <div className="home-sub">
          Embark on exploration 800 questions awaits
        </div>
        <Link to="/discussion">
          <Question></Question>
        </Link>
      </div>
    </div>
  );
};

export default Home;
