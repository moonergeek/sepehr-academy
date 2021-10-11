import React, { useState } from 'react';
import "./sort.css";
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


export default function Sort(props) {
    const [showBasic, setShowBasic] = useState(false);

    return (
        <MDBNavbar className='container mt-0 main' expand='lg' >
            <MDBContainer fluid>




                <MDBCollapse navbar show={showBasic}>



                        <SearchBox placeHolder={props.placeholder}/>
                    <MDBNavbarBrand>
                    <MDBNavbarNav className='mr-auto mb-2 mb-lg-0'>



                        <MDBNavbarItem className=" sort">
                            <MDBDropdown>
                                <MDBDropdownToggle tag='a' className='nav-link'>
                                    مرتب سازی بر اساس تاریخ
                                </MDBDropdownToggle>
                                <MDBDropdownMenu>
                                    <MDBDropdownItem>
                                        <MDBDropdownLink>مرتب سازی بر اساس استاد</MDBDropdownLink>
                                    </MDBDropdownItem>
                                    <MDBDropdownItem>
                                        <MDBDropdownLink>مرتب سازی بر اساس زمان</MDBDropdownLink>
                                    </MDBDropdownItem>
                                    {/*<MDBDropdownItem>*/}
                                    {/*    <MDBDropdownLink>Something else here</MDBDropdownLink>*/}
                                    {/*</MDBDropdownItem>*/}
                                </MDBDropdownMenu>
                            </MDBDropdown>
                        </MDBNavbarItem>

                        <MDBNavbarItem>

                        </MDBNavbarItem>
                    </MDBNavbarNav>
                    </MDBNavbarBrand>
                </MDBCollapse>
            </MDBContainer>
        </MDBNavbar>
    );
}