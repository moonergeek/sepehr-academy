import React from 'react';
import {
    MDBInputGroup,
    MDBInputGroupText,
    MDBInputGroupElement
} from 'mdb-react-ui-kit';
import "./field.css";
import {MDBBtn} from 'mdb-react-ui-kit';

export default function Field() {
    return (
        <>
            <div className={"fields container mt-3"}>
                <MDBInputGroup className='mb-3'>

                    <MDBInputGroupElement type='text' placeholder="نام شما (الزامی)"/>
                </MDBInputGroup>

                <MDBInputGroup className='mb-3'>

                    <MDBInputGroupElement id='basic-url' type='text' placeholder="ایمیل شما (الزامی)"/>
                </MDBInputGroup>


                <MDBInputGroup className='mb-3'>

                    <MDBInputGroupElement type='text' placeholder="تلفن شما"/>
                </MDBInputGroup>

                <MDBInputGroup className='mb-3'>

                    <MDBInputGroupElement type='text' placeholder="موضوع"/>
                </MDBInputGroup>


                <MDBInputGroup className='mb-3'>
                    <MDBInputGroupElement textarea type='text' placeholder="پیام شما"/>
                </MDBInputGroup>
                <MDBBtn color='success' className={"Btn"}>ارسال</MDBBtn>
            </div>
        </>
    );
}