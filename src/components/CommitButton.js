// components/CommitButton.js
import React from "react";

const CommitButton = ({ onCommit }) => {
  return (
    <div>
      <button className="btn btn-success para" onClick={onCommit}>
        Commit Config
      </button>
    </div>
  );
};

export default CommitButton;
