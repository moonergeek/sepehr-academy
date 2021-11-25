import React from "react";
import AddStudentToTerm from "../../../../core/services/API/student/addStudentToTerm";

const SignButton = () => {

    const registerInTerm = async () => {
        const result = await AddStudentToTerm();
        console.log("hello");
    }


    return (
        <div className="sina" onClick={registerInTerm}>
           گی به دله
        </div>
    );
};

export default SignButton;
