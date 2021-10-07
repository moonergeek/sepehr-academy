import React from 'react';
import "./accordion.css"
import {CgMathMinus, CgMathPlus} from "react-icons/all";

const Accordion = () => {
    return (
        <>
            <div className="accordion" id="accordionExample">
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                        <button className="accordion-button" type="button" data-bs-toggle="collapse"
                                data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            چطور میتونم در سایت ثبت نام کنم؟
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne"
                         data-bs-parent="#accordionExample">

                        <div className="accordion-body">
                            برای ثبت نام در سایت کافیه در قسمت منو سایت روی منوی کاربری کلیک کنید و ثبت نام رو انتخاب
                            کنید . بعد در این صفحه اطلاعات لارم رو پر میکنید و روی ثبت نام کلیک میکنید . بعد از ثبت نام
                            برای تایید حساب کافیه به ایمیل خود مراجعه کنید و روی لینک ارسال شده به شما کلیک کنید . به
                            همین راحتی
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingThree">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            چطور میتونم از دورهای آموزشی استفاده کنم ؟
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree"
                         data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            برای استفاده از دوره های آموزشی ما وارد صفحه ی جزییات هر دوره میشوید و دوره را به سبد خرید
                            خود اضافه میکنید . بعد از ورود به صفحه ی خرید و پرداخت هزینه دور ها برای شما در پنل کاربری
                            شما فعال میشود و میتوانید به راحتی آموزش ها را دانلود و استفاده نمایید
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTwo">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            چطور میتونم حسابم رو ویرایش کنم؟
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo"
                         data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            برای ویرایش حساب کاربری خود کافیه وارد پنل کاربری خود شوید و میتوانید از قسمت ویرایش حساب
                            کاربری اطلاعات کاربری خود را ویرایش کنید و نکته ی مهم اینه که حتما اطلاعات خود را به صورت
                            درست درج کنید که در پشتیبانی دوره ها دچار مشکل نشوید
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
};

export default Accordion;
