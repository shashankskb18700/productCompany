import "./UserResponse.css";
const UserResponseSuggestion = () => {
  return (
    <div className="user-response">
      <div className="suggestion-top">
        Share your <b>Suggestion</b> with us for chance to earn rewards
      </div>

      <div className="suggestion-mid">
        <label>Choose a section</label>
        <select>
          <option value="fruit">Fruit</option>

          <option value="vegetable">Vegetable</option>

          <option value="rice">Meat</option>
        </select>
      </div>

      <div className="suggestion-bottom">
        <label>Describe the suggestion in detail *</label>
        <textarea></textarea>
      </div>
      <div className="submitButton">submit</div>
    </div>
  );
};

export default UserResponseSuggestion;
