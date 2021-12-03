import React, { useEffect, useState } from "react";
import delete_icon from "../../../assets/img/icons/cancel.png";
import { BootstrapTooltip } from "../../tooltip/bootstrapTooltip";
import RemoveStuToTerm from "../../../core/services/API/student/removeStudentToTerm";
import GetUserDetails from "../../../core/services/API/auth/GetUserDetail.api";
import { toast, ToastContainer } from "react-toastify";
import { useHistory } from "react-router-dom";
import { useStateIfMounted } from "use-state-if-mounted";

const PanelDeleteIcon = (props) => {
  const history = useHistory();
  const [userInformation, setUserInformation] = useStateIfMounted([]);

  const getUserInformation = async () => {
    try {
      const result = await GetUserDetails();
      setUserInformation(result.result);
      // console.log(userInformation.terms);
    } catch (err) {
      console.log("header api error :" + err);
    }
  };

  useEffect(() => {
    getUserInformation();
  }, []);

  const removeStudent = async () => {
    const termID = {
      termId: props.termId,
    };

    const result = await RemoveStuToTerm(termID, userInformation._id);
    if (result.statusText === "OK") {
      toast.success(result.data.message[0].message);
    } else {
      toast.error(result.data.message[0].message);
    }
    setTimeout(() => {
      result && history.push("/dashboard/" + userInformation._id + "/panel");
    }, 2500);
    console.log("hello");
    console.log(props.termId);
    console.log(result);
    console.log(userInformation._id);
  };

  return (
    <>
      <ToastContainer
        position="top-center"
        limit={1}
        autoClose={2000}
        rtl={true}
      />
      <BootstrapTooltip placement={"left"} title="حذف">
        <img
          width={16}
          style={{ position: "relative", left: "-15px" }}
          src={delete_icon}
          alt="delete_icon"
          onClick={removeStudent}
        />
      </BootstrapTooltip>
    </>
  );
};

export default PanelDeleteIcon;
