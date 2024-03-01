import "./UserResponse.css";

const UserResponseFeedback = () => {
  return (
    <div className="user-response">
      <div>
        Let us know your <b>Feedback</b> about us!
      </div>
      <div>
        <textarea placeholder="write here ..."></textarea>
      </div>
      <div className="UserResponseFeedback-checkbox">
        <input type="checkbox"></input>
        <label>Send Feedback anonymously</label>
      </div>
      <div>Submit</div>
    </div>
  );
};

export default UserResponseFeedback;
