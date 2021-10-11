import React, {useState} from 'react';
import "./sort.css";
import {FcApproval, IoIosArrowDown} from "react-icons/all";
import {
    MDBContainer,
    MDBNavbar,
    MDBNavbarBrand,
    MDBNavbarToggler,
    MDBIcon,
    MDBNavbarNav,
    MDBNavbarItem,
    MDBNavbarLink,
    MDBBtn,
    MDBDropdown,
    MDBDropdownToggle,
    MDBDropdownMenu,
    MDBDropdownItem,
    MDBDropdownLink,
    MDBCollapse
} from 'mdb-react-ui-kit';
import SearchBox from "../searchBox/serachbox";
import DropDownBtnForMaghalat from "../dropDownBtnForMaghalat/dropDownBtnForMaghalat";


export default function Sort(props) {
    const [showBasic, setShowBasic] = useState(false);

    return (
        //
        // <MDBNavbar className='container mt-0 main' expand='lg'>
        //     <MDBContainer fluid>
        //
        //
        //         <MDBCollapse navbar show={showBasic}>
        //
        //
        //             {/*<SearchBox placeHolder={props.placeholder}/>*/}
        //             <MDBNavbarBrand>
        //                 <MDBNavbarNav className='mr-auto mb-2 mb-lg-0'>
        //
        //
        //                     <div className="dropdown mt-3 pe-4 sort">
        //                         <button className="btn btn-success dropdown-toggle-split" type="button"
        //                                 id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
        //                             مرتب سازی کل مقالات
        //                             <IoIosArrowDown/>
        //                         </button>
        //                         <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
        //                             <li><a className="dropdown-item" href="#">
        //                                 <div className="form-check">
        //                                     <input className="form-check-input" type="checkbox" value=""
        //                                            id="flexCheckDefault"/>
        //                                     <label className="form-check-label" htmlFor="flexCheckDefault">
        //                                         تخفیف ویژه
        //                                         <FcApproval/>
        //                                     </label>
        //                                 </div>
        //                             </a></li>
        //
        //                             <li><a className="dropdown-item" href="#">
        //                                 <div className="form-check">
        //                                     <input className="form-check-input" type="checkbox" value=""
        //                                            id="flexCheckDefault"/>
        //                                     <label className="form-check-label" htmlFor="flexCheckDefault">
        //                                         مقالات رایگان
        //                                     </label>
        //                                 </div>
        //                             </a></li>
        //                             <li><a className="dropdown-item" href="#">
        //                                 <div className="form-check">
        //                                     <input className="form-check-input" type="checkbox" value=""
        //                                            id="flexCheckDefault"/>
        //                                     <label className="form-check-label" htmlFor="flexCheckDefault">
        //                                         مقاله های محبوب
        //                                     </label>
        //                                 </div>
        //                             </a></li>
        //
        //                             <li><a className="dropdown-item" href="#">
        //                                 <div className="form-check">
        //                                     <input className="form-check-input" type="checkbox" value=""
        //                                            id="flexCheckDefault"/>
        //                                     <label className="form-check-label" htmlFor="flexCheckDefault">
        //                                         مرتب سازی بر اساس کم ترین قیمت
        //                                     </label>
        //                                 </div>
        //                             </a></li>
        //                             <li><a className="dropdown-item" href="#">
        //                                 <div className="form-check">
        //                                     <input className="form-check-input" type="checkbox" value=""
        //                                            id="flexCheckDefault"/>
        //                                     <label className="form-check-label" htmlFor="flexCheckDefault">
        //                                         مرتب سازی بر اساس بیش ترین قیمت
        //                                     </label>
        //                                 </div>
        //                             </a></li>
        //                         </ul>
        //                     </div>
        //
        //                     <MDBNavbarItem>
        //
        //                     </MDBNavbarItem>
        //                 </MDBNavbarNav>
        //             </MDBNavbarBrand>
        //         </MDBCollapse>
        //     </MDBContainer>
        // </MDBNavbar>
        <div className={"container pt-3 mt-5"}>
        <div className={"back-div"}>
            <div className={"row"}>
                <form className="d-flex pe-4 py-3 col-md-8 col-lg-9 col-sm-7 col-7">
                    <SearchBox placeHolder={props.placeHolder}/>
                </form>
                <div className={"col-lg-3 col-md-4 col-sm-5 col-5 pe-2"}>
                    <DropDownBtnForMaghalat/>
                </div>
            </div>
        </div>
        </div>
    );
}