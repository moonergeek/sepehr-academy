import React, { useState } from "react";
import "./Cart.css";
import Repic from "../../assets/img/1280px-React-icon.svg.png";
import Angu from "../../assets/img/Angular_full_color_logo.svg.png";
import Vue from "../../assets/img/1184px-Vue.js_Logo_2.svg.png";

const Cart = () => {
  const [state, setState] = useState([
    { num: 1, pic: Repic, name: "دوره آموزش ریکت جامع", price: 2000 },
    { num: 2, pic: Angu, name: "دوره آموزش انگولار", price: 3500 },
    { num: 3, pic: Vue, name: "دوره آموزش ویو جی اس", price: 4000 },
  ]);

  const removeHandler = (item) => {
    const courses = state.filter((t) => t.num !== item.num);
    setState(courses);
  };
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col mt-4">
            <table className="table table-bordered">
              <thead>
                <tr>
                  <th>شماره</th>
                  <th>تصویر</th>
                  <th>نام دوره</th>
                  <th>قیمت</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {state.map((item) => (
                  <>
                    <tr key={item.num}>
                      <th>{item.num}</th>
                      <td>
                        <img
                          src={item.pic}
                          alt={item.name}
                          width="50"
                          height="40"
                        />
                      </td>
                      <td>{item.name}</td>
                      <td>{`${item.price} تومان`}</td>
                      <td className="text-center">
                        <button
                          onClick={() => removeHandler(item)}
                          className="btn btn-sm btn-danger"
                        >
                          حذف از سبد
                        </button>
                      </td>
                    </tr>
                  </>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
