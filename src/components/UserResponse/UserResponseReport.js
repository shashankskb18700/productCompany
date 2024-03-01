const UserResponseReport = () => {
  return (
    <div className="user-response">
      <div className="suggestion-top">
        Let us know about the <b>issue</b> your are facing right now!
      </div>

      <div className="suggestion-mid">
        <label>Choose a section</label>
        <select>
          <option value="conceptCard">Concept cards</option>
          <option value="Interveiw">Interveiw Questions</option>

          <option value="practiceQuestion">Practice Question</option>

          <option value="Quizzes">Quizzes</option>
          <option value="Others">Others</option>
        </select>
      </div>

      <div className="suggestion-bottom">
        <label>Describe the issue in detail *</label>
        <textarea></textarea>
      </div>
      <div className="submitButton">submit</div>
    </div>
  );
};

export default UserResponseReport;
