import React from 'react';
import "./panelTable.css"
import {FcNumericalSorting12} from "react-icons/all";
import PanelDeleteIcon from "../panel-delete-icon/panelDeleteIcon";
import course1 from "../../../assets/img/02.jpg"
import course2 from "../../../assets/img/03.jpg"
import course3 from "../../../assets/img/09.jpg"
import course4 from "../../../assets/img/01.jpg"
import course5 from "../../../assets/img/04.jpg"

const PanelTable = () => {
    return (
        <>
            <table className="table panel-table table-borderless">
                <thead className={"thead-color"}>
                <tr className={"tr-color"}>
                    <th scope="col "><FcNumericalSorting12/></th>
                    <th scope="col ">شماره سفارش</th>
                    <th scope="col ">نام دوره</th>
                    <th scope="col ">مدرس</th>
                    <th scope="col ">تاریخ خرید</th>
                    <th scope="col "> وضعیت</th>
                    <th scope="col "> مجموع سفارش</th>
                    <th scope="col "> تنظیمات</th>
                </tr>
                </thead>
                <tbody>
                <tr className={"green-hover"}>
                    <th scope="row" className={"panel-th-items"}>1</th>
                    <td className={"panel-td-items"}>4554-01</td>
                    <td className={"panel-td-items"}>
                        <img className={"table-course-img"} src={course1} alt=""/>
                        آموزش جامع زبان پایتون ...</td>
                    <td className={"panel-td-items"}> حسامی</td>
                    <td className={"panel-td-items"}> 1400/01/20</td>
                    <td className={"panel-td-items"}>
                        <span className="badge bg-success">خرید موفق</span>
                    </td>
                    <td className={"panel-td-items"}>1,390,000 تومان</td>
                    <td className={"panel-td-items"}>
                        <PanelDeleteIcon/>
                    </td>
                </tr>
                <tr className={"green-hover"}>
                    <th scope="row" className={"panel-th-items"}>2</th>
                    <td className={"panel-td-items"}>4554-02</td>
                    <td className={"panel-td-items"}>
                        <img className={"table-course-img"} src={course2} alt=""/>
                        شیءگرایی در زبان جاوا ...</td>
                    <td className={"panel-td-items"}>حسامی</td>
                    <td className={"panel-td-items"}>1400/02/23</td>
                    <td className={"panel-td-items"}>
                        <span className="badge bg-primary">پرداخت</span>
                    </td>
                    <td className={"panel-td-items"}>1,390,000 تومان</td>
                    <td className={"panel-td-items"}>
                        <PanelDeleteIcon/>
                    </td>
                </tr>
                <tr className={"green-hover"}>
                    <th scope="row" className={"panel-th-items"}>3</th>
                    <td className={"panel-td-items"} colSpan="1">4554-03</td>
                    <td className={"panel-td-items"}>
                        <img className={"table-course-img"} src={course3} alt=""/>
                        آموزش جامع زبان پایتون ...</td>
                    <td className={"panel-td-items"}>حسامی</td>
                    <td className={"panel-td-items"}>1400/06/15</td>
                    <td className={"panel-td-items"}>
                        <span className="badge bg-success">خرید موفق</span>
                    </td>
                    <td className={"panel-td-items"}>1,390,000 تومان</td>
                    <td className={"panel-td-items"}>
                        <PanelDeleteIcon/>
                    </td>
                </tr>
                <tr className={"green-hover"}>
                    <th scope="row" className={"panel-th-items"}>4</th>
                    <td className={"panel-td-items"}>4554-02</td>
                    <td className={"panel-td-items"}>
                        <img className={"table-course-img"} src={course4} alt=""/>
                        شیءگرایی در زبان جاوا ...</td>
                    <td className={"panel-td-items"}>حسامی</td>
                    <td className={"panel-td-items"}>1400/02/23</td>
                    <td className={"panel-td-items"}>
                        <span className="badge bg-danger">پرداخت نشده</span>
                    </td>
                    <td className={"panel-td-items"}>1,390,000 تومان</td>
                    <td className={"panel-td-items"}>
                        <PanelDeleteIcon/>
                    </td>
                </tr>
                <tr className={"green-hover"}>
                    <th scope="row" className={"panel-th-items"}>5</th>
                    <td className={"panel-td-items"}>4554-01</td>
                    <td className={"panel-td-items"}>
                        <img className={"table-course-img"} src={course5} alt=""/>
                        آموزش جامع زبان پایتون ...</td>
                    <td className={"panel-td-items"}> حسامی</td>
                    <td className={"panel-td-items"}> 1400/01/20</td>
                    <td className={"panel-td-items"}>
                        <span className="badge bg-success">خرید موفق</span>
                    </td>
                    <td className={"panel-td-items"}>1,390,000 تومان</td>
                    <td className={"panel-td-items"}>
                        <PanelDeleteIcon/>
                    </td>
                </tr>
                <tr className={"green-hover"}>
                    <th scope="row" className={"panel-th-items"}>6</th>
                    <td className={"panel-td-items"}>4554-01</td>
                    <td className={"panel-td-items"}>
                        <img className={"table-course-img"} src={course1} alt=""/>
                        آموزش جامع زبان پایتون ...</td>
                    <td className={"panel-td-items"}> حسامی</td>
                    <td className={"panel-td-items"}> 1400/01/20</td>
                    <td className={"panel-td-items"}>
                        <span className="badge bg-success">خرید موفق</span>
                    </td>
                    <td className={"panel-td-items"}>1,390,000 تومان</td>
                    <td className={"panel-td-items"}>
                        <PanelDeleteIcon/>
                    </td>
                </tr>
                <tr className={"green-hover"}>
                    <th scope="row" className={"panel-th-items"}>7</th>
                    <td className={"panel-td-items"}>4554-02</td>
                    <td className={"panel-td-items"}>
                        <img className={"table-course-img"} src={course2} alt=""/>
                        شیءگرایی در زبان جاوا ...</td>
                    <td className={"panel-td-items"}>حسامی</td>
                    <td className={"panel-td-items"}>1400/02/23</td>
                    <td className={"panel-td-items"}>
                        <span className="badge bg-primary">پرداخت</span>
                    </td>
                    <td className={"panel-td-items"}>1,390,000 تومان</td>
                    <td className={"panel-td-items"}>
                        <PanelDeleteIcon/>
                    </td>
                </tr>
                </tbody>
            </table>

        </>
    );
};

export default PanelTable;
