import "./Answer.css";

import Women from "../../Assets/womenIcon.png";
import Edit from "../../Assets/edit.svg";

import Like from "../../Assets/like.svg";
import comments from "../../Assets/comments.svg";
const Answer = () => {
  return (
    <div className="Answer">
      <div className="Answer-top">
        <div className="Answer-user-detail">
          <img src={Women}></img>

          <div>
            <div>
              <b>Neha Bhat</b>
            </div>
            <div>Jun 27, 2023</div>
          </div>
        </div>

        <div className="rewrite">
          <img src={Edit} className="edit"></img>
          <div>Edit</div>
        </div>
      </div>

      <div className="Answer-mid">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </div>

      <div className="Answer-bottom">
        <div>
          <img src={Like} className="like"></img>
          Like
        </div>
        <div className="AddComment">
          <img src={comments} className="comments"></img>
          <input type="text" placeholder="Add a comment"></input>
        </div>
        <div className="submit-answer">post</div>
      </div>
    </div>
  );
};

export default Answer;
