import React, {useEffect, useState} from 'react';
import 'react-toastify/dist/ReactToastify.css';
import {ToastContainer, toast} from 'react-toastify';
import "./editPanelUser.css"
import PanelTitle from "../panel-title/panelTitle";
import cloud from "../../../assets/img/cloud-computing.png"
import PostImage from "../../../core/services/API/uploadImg/postImage.api";
import 'react-toastify/dist/ReactToastify.css';
import {getItem, setItem} from "../../../core/services/storage/storage";
import UpdateStuInfo from "../../../core/services/API/student/updateStudentInfo";
import GetUserDetails from "../../../core/services/API/auth/GetUserDetail.api";
import Loading from "../../common/loading/loadingForHomePage";



const EditPanelUser = (props) => {


    const [fullNameValue, setFullNameValue] = useState("");
    const [emailValue, setEmailValue] = useState("");
    const [phoneNumValue, setPhoneNumValue] = useState("");
    const [nationalIdValue, setNationalIdValue] = useState("");
    const [birthDateValue, setBirthDateValue] = useState("");
    const [loading , setLoading] = useState(false);
    const [image, setImage] = useState("");


    const [userInformation, setUserInformation] = useState([]);

    const getUserInformation = async () => {
        try {

            const result = await GetUserDetails();
            setUserInformation(result.result);
            setBirthDateValue(result.result.birthDate);
            setNationalIdValue(result.result.nationalId);
            setFullNameValue(result.result.fullName);
            setEmailValue(result.result.email);
            setPhoneNumValue(result.result.phoneNumber);
            setImage(getItem(result.result._id + "image"));
            setLoading(true);

        } catch (err) {
            console.log("header api error :" + err)
        }
    }
    useEffect(() => {
        getUserInformation()
    }, []);


    const handleNameChange = (event) => {
        const wordEntered = event.target.value
        if (wordEntered !== "") {
            setFullNameValue(wordEntered);
            console.log(wordEntered)
        } else if (wordEntered === "") {
            setFullNameValue(userInformation.fullName);
        }

    }

    const handleEmailChange = (event) => {
        const wordEntered = event.target.value;
        if (wordEntered !== "") {
            setEmailValue(wordEntered);
            console.log(wordEntered);
        } else if (wordEntered === "") {
            setEmailValue(userInformation.email);
        }

    }

    const handlePhoneNumChange = (event) => {
        const wordEntered = event.target.value;
        if (wordEntered !== "") {
            setPhoneNumValue(wordEntered);
            console.log(wordEntered)
        } else if (wordEntered === "") {
            setPhoneNumValue(userInformation.phoneNumber);
        }
    }

    const handleNationalIdChange = (event) => {
        const wordEntered = event.target.value;
        if (wordEntered !== "") {
            setNationalIdValue(wordEntered);
            console.log(wordEntered)
        } else if (wordEntered === "") {
            setNationalIdValue(userInformation.nationalId);
        }

    }
    const handleBirthDateChange = (event) => {
        const wordEntered = event.target.value;
        if (wordEntered !== "") {
            setBirthDateValue(wordEntered);
            console.log(wordEntered)
        } else if (wordEntered === null) {
            setBirthDateValue(userInformation.birthDate);
        }
    }


    const submitChanges = async () => {
        const id = userInformation._id;
        const newFullName = fullNameValue;
        const newEmail = emailValue;
        const newPhoneNumber = phoneNumValue;
        const newBirthDate = birthDateValue;
        const newNationalId = nationalIdValue;
        const obj = {
            fullName: newFullName,
            email: newEmail,
            phoneNumber: newPhoneNumber,
            birthDate: newBirthDate,
            nationalId: newNationalId
        };
        try {
            const resultImg = await PostImage();
            console.log(resultImg.data.result)

            setItem(userInformation._id + "image", resultImg.data.result);

            console.log(obj);

            const result = await UpdateStuInfo(obj, id);
            console.log(result.statusText);
            if (result.statusText === "OK") {
                toast.success("اطلاعات شما به روز شد");

            } else {
                toast.error("انجام نشد");

            }

            console.log(result);
            window.location.reload();
        } catch (e) {
            console.log(e);

        }


    }


    return (
        <>

            <ToastContainer
                position="top-center"
                limit={1}
                autoClose={2000}
                rtl={true}
            />
            {loading ?             <div className={"white-background"}>
                <div className={"container"}>
                    <div className={"row mb-5 mt-3"}><PanelTitle title={" ویرایش اطلاعات شخصی کاربر"}/></div>
                    <div className="row mb-4 pt-4">
                        <div className="col pt-2">
                            <input placeHolder={userInformation.fullName} className={"change form-control me-2"}
                                   value={fullNameValue} onChange={handleNameChange}/>


                        </div>
                        <div className="col pt-2">
                            <input placeHolder={userInformation.email} value={emailValue}
                                   className={"change form-control me-2"} onChange={handleEmailChange}/>


                        </div>
                    </div>
                    <div className="row mb-3">
                        <div className="col pt-2">
                            <input placeHolder={userInformation.phoneNumber}
                                   className={"change form-control me-2"}
                                   value={phoneNumValue} onChange={handlePhoneNumChange}/>

                        </div>
                        <div className="col pt-2">
                            <input placeHolder={userInformation.birthDate} className={"change form-control me-2"}
                                   value={birthDateValue} onChange={handleBirthDateChange}/>
                        </div>
                    </div>
                    <div className="row mb-3">
                        <div className="col pt-2">
                            <input placeHolder={userInformation.nationalId} className={"change form-control me-2"}
                                   value={nationalIdValue} onChange={handleNationalIdChange}/>

                        </div>

                    </div>

                    <div className={"row userImage"}>

                        <div className={"col-sm-3"}><img src={image} className={"panel-user-upload"}/></div>
                        <div className={"col-sm-9"}>
                            <div className="mb-3">
                                <button className={"btn btn-upload"}>
                                    <span className={"upload-avatar-text"}>آپلود آواتار</span>
                                    <img className={"upload-icon"} src={cloud} alt="cloud"/>
                                    <input className="form-control visibility-none" type="file" id="formFile"
                                           aria-label="Search"/>
                                </button>
                                <span className={"upload-text-2"}> تصویر خود را بارگذاری کنید...</span>
                            </div>
                        </div>


                    </div>
                    <div className={"row mt-3 mb-3 me-2"}>
                        <button className={" btn-green btn"} onClick={submitChanges}>ثبت</button>
                        <button className={" btn-blue btn me-2 mb-3"}> ریست</button>
                    </div>

                </div>
            </div> : <Loading />}


        </>
    );
};

export default EditPanelUser;
