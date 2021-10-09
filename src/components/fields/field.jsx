import React from 'react';
import {
    MDBInputGroup,
    MDBInputGroupText,
    MDBInputGroupElement
} from 'mdb-react-ui-kit';
import "./field.css";

export default function Field() {
    return (
        <>
            <div className={"fields container mt-3"}>
            <MDBInputGroup className='mb-3'>

                <MDBInputGroupElement type='text' placeholder="نام شما (الزامی)" />
            </MDBInputGroup>

            {/*<MDBInputGroup className='mb-3'>*/}
            {/*    <MDBInputGroupElement type='text' placeholder="Recipient's username" />*/}

            {/*    <MDBInputGroupText>@example.com</MDBInputGroupText>*/}
            {/*</MDBInputGroup>*/}

            {/*<label htmlFor='basic-url' className='form-label'>*/}
            {/*    Your vanity URL*/}
            {/*</label>*/}
            <MDBInputGroup className='mb-3'>
                {/*<MDBInputGroupText>https://example.com/users/</MDBInputGroupText>*/}
                <MDBInputGroupElement id='basic-url' type='text' placeholder="ایمیل شما (الزامی)"  />
            </MDBInputGroup>

            {/*<MDBInputGroup className='mb-3'>*/}
            {/*    <MDBInputGroupText>$</MDBInputGroupText>*/}
            {/*    <MDBInputGroupElement type='text' />*/}
            {/*    <MDBInputGroupText>.00</MDBInputGroupText>*/}
            {/*</MDBInputGroup>*/}


                <MDBInputGroup className='mb-3'>

                    <MDBInputGroupElement type='text' placeholder="تلفن شما" />
                </MDBInputGroup>

                <MDBInputGroup className='mb-3'>

                    <MDBInputGroupElement type='text' placeholder="موضوع" />
                </MDBInputGroup>

            {/*<MDBInputGroup className='mb-3'>*/}
            {/*    <MDBInputGroupElement placeholder='Username' type='text' />*/}
            {/*    <MDBInputGroupText>@</MDBInputGroupText>*/}
            {/*    <MDBInputGroupElement placeholder='Server' type='text' />*/}
            {/*</MDBInputGroup>*/}

            <MDBInputGroup className='mb-3'>
                {/*<MDBInputGroupText>پیام شما</MDBInputGroupText>*/}
                <MDBInputGroupElement textarea type='text'  placeholder="پیام شما" />
            </MDBInputGroup>
            </div>
        </>
    );
}