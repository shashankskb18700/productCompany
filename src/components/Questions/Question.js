import rocket from "../../Assets/rocket.svg";
import QuestionTypeTags from "./QuestionTypeTags/QuestionTypeTags";
import QuestionDifficultyTag from "./QuestionDifficultyTag/QuestionDifficultyTag";

import Answer from "../../Assets/answer.svg";
import Eye from "../../Assets/eye.svg";

import "./Question.css";
const Question = () => {
  return (
    <div className="Question">
      <div className="Question-data">
        <div>Posted on 28 Jun 2023</div>
        <div className="Industry-Type">
          <img src={rocket}></img>
          <div>startup</div>
        </div>
      </div>

      <div className="Question-description">
        A travel startup wants Amazon to pre-install their personal travel agent
        bot on existing Amazon Echos. What is the value of partnership to travel
        startup ?
      </div>

      <div className="tags">
        <div className="typeTags">
          <QuestionTypeTags tagName="Design" />
          <QuestionTypeTags tagName="UX" />
        </div>
        <div>
          <QuestionDifficultyTag difficultyTag="easy" />
        </div>
      </div>

      <div className="Question-Additional-detail">
        <div className="addDetails-sub">
          <img src={Answer} className="answer"></img>
          <b> 23</b>
        </div>
        <div className="addDetails-sub">
          <img src={Eye} className="answer"></img>
          <b>100 views</b>
        </div>
      </div>
    </div>
  );
};

export default Question;
