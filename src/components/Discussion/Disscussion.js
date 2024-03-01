import Header from "../Header/Header";
import FloatingButton from "../FloatingButton/FloatingButton";
import Question from "../Questions/Question";
import Answer from "../Answer/Answer";

import "./Discussion.css";
const Discussion = () => {
  return (
    <div className="discussion">
      <Header></Header>
      <div className="question-ans">
        <Question />
        <Answer />
      </div>

      <FloatingButton></FloatingButton>
    </div>
  );
};

export default Discussion;
