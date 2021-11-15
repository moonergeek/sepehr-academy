import React from "react";
import { useHistory } from "react-router-dom";

const AskQuestions = () => {
  const history = useHistory();

  return (
    <>
      <div className="ask-questions mt-5 rounded-3 p-3 d-flex justify-content-center">
        سوالات خود را میتوانید{" "}
        <span
          onClick={() => {
            history.push("/request");
          }}
          className="question-link"
        >
          اینجا
        </span>{" "}
        مطرح کنید
      </div>
    </>
  );
};

export default AskQuestions;
