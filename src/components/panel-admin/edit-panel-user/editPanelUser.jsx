import React, {useEffect, useState} from 'react';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import "./editPanelUser.css"
import PanelTitle from "../panel-title/panelTitle";
import userImage from "../../../assets/img/img4.png";
import cloud from "../../../assets/img/cloud-computing.png"
import UpdateStudentInfo from "../../../core/services/API/student/updateStudentInfo";

import PostImage from "../../../core/services/API/uploadImg/postImage.api";
import 'react-toastify/dist/ReactToastify.css';
import {getItem, setItem} from "../../../core/services/storage/storage";
import UpdateStuInfo from "../../../core/services/API/student/updateStudentInfo";



const EditPanelUser = (props) => {





    const [fullNameValue, setFullNameValue] = useState("");
    const [emailValue, setEmailValue] = useState("");
    const [phoneNumValue, setPhoneNumValue] = useState("");
    const [nationalIdValue, setNationalIdValue] = useState("");
    const [birthDateValue, setBirthDateValue] = useState("");
    const [imageAddress, setImageAddress] = useState("");
    const [image,setImage] = useState("");
    //get default value
    const getFirstValue = () => {
        setBirthDateValue(props.userInfo.result.birthDate);
        setNationalIdValue(props.userInfo.result.nationalId);
        setFullNameValue(props.userInfo.result.fullName);
        setEmailValue(props.userInfo.result.email);
        setPhoneNumValue(props.userInfo.result.phoneNumber);
        setImage(getItem(props.userInfo.result._id + "image"));
    }

    useEffect(() => {
        getFirstValue();

    }, []);


    const handleNameChange = (event) => {
        const wordEntered = event.target.value
        if(wordEntered !== ""){
            setFullNameValue(wordEntered);
            console.log(wordEntered)
        }
        else if(wordEntered === ""){
            setFullNameValue(props.userInfo.result.fullName);
        }

    }

    const handleEmailChange = (event) => {
        const wordEntered = event.target.value;
        if (wordEntered !== ""){
            setEmailValue(wordEntered);
            console.log(wordEntered);
        }
        else if(wordEntered === ""){
            setEmailValue(props.userInfo.result.email);
        }

    }

    const handlePhoneNumChange = (event) => {
        const wordEntered = event.target.value;
        if (wordEntered !== ""){
            setPhoneNumValue(wordEntered);
            console.log(wordEntered)
        }
        else if (wordEntered === ""){
            setPhoneNumValue(props.userInfo.result.phoneNumber);
        }
    }

    const handleNationalIdChange = (event) => {
        const wordEntered = event.target.value;
        if (wordEntered !== ""){
            setNationalIdValue(wordEntered);
            console.log(wordEntered)
        }
        else if (wordEntered === ""){
            setNationalIdValue(props.userInfo.result.nationalId);
        }

    }
    const handleBirthDateChange = (event) => {
        const wordEntered = event.target.value;
        if (wordEntered !== ""){
            setBirthDateValue(wordEntered);
            console.log(wordEntered)
        }
        else if (wordEntered === null){
            setBirthDateValue(props.userInfo.result.birthDate);
        }
    }


    const submitChanges = async () => {
        const id = props.userInfo.result._id;
        const newFullName = fullNameValue;
        const newEmail = emailValue;
        const newPhoneNumber = phoneNumValue;
        const newBirthDate = birthDateValue;
        const newNationalId = nationalIdValue;
        const obj = {
            fullName : newFullName ,
            email : newEmail,
            phoneNumber : newPhoneNumber,
            birthDate : newBirthDate,
            nationalId : newNationalId
        };
        try{
            const resultImg = await PostImage();
            console.log(resultImg.data.result )

            setItem(props.userInfo.result._id + "image",resultImg.data.result);

            console.log(obj);
            console.log(props.userInfo);
            const result = await UpdateStuInfo(obj,id);
            console.log(result.statusText);
            if (result.statusText === "OK") {
                toast.error("انجام شد");
                console.log("ok")
            } else {
                toast.success("انجام نشد");
                console.log("no")
            }

            console.log(result)
        }
        catch (e) {
            console.log(e);
            console.log("wrong")
        }


    }



    return (
        <>

            <div className={"white-background"}>
                <div className={"container"}>
                    <div className={"row mb-5 mt-3"}><PanelTitle title={" ویرایش اطلاعات شخصی کاربر"}/></div>
                    <div className="row mb-4 pt-4">
                        <div className="col pt-2">
                            <input placeHolder={props.userInfo.result.fullName} className={"change form-control me-2"}
                                   value={fullNameValue} onChange={handleNameChange}/>


                        </div>
                        <div className="col pt-2">
                            <input placeHolder={props.userInfo.result.email} value={emailValue}
                                   className={"change form-control me-2"} onChange={handleEmailChange}/>


                        </div>
                    </div>
                    <div className="row mb-3">
                        <div className="col pt-2">
                            <input placeHolder={props.userInfo.result.phoneNumber}
                                   className={"change form-control me-2"}
                                   value={phoneNumValue} onChange={handlePhoneNumChange}/>

                        </div>
                        <div className="col pt-2">
                            <input placeHolder={props.userInfo.result.birthDate} className={"change form-control me-2"}
                                   value={birthDateValue} onChange={handleBirthDateChange}/>
                        </div>
                    </div>
                    <div className="row mb-3">
                        <div className="col pt-2">
                            <input placeHolder={props.userInfo.result.nationalId} className={"change form-control me-2"}
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
            </div>

        </>
    );
};

export default EditPanelUser;
