import React from "react";
import AddStudentToTerm from "../../../../core/services/API/student/addStudentToTerm";
import AddStuToTerm from "../../../../core/services/API/student/addStudentToTerm";

const SignButton = () => {

    const registerInTerm = async () => {
        const result = await AddStuToTerm();
        console.log("hello");
        console.log(result)
    }


    return (
        <div className="sina" onClick={registerInTerm}>
          hsGHGUIHGSUHU:SU:SU:SGSUHSU:UhSGuhSGhSGSG:
        </div>
    );
};

export default SignButton;
