import React from 'react';
import {Redirect, Route, Switch} from "react-router-dom";
import HomePage from "../screens/homePage/homePage";
import CoursesPage from "../screens/coursesPage/coursesPage";
import FAQ from "../screens/fAQ/fAQ";
import About from "../screens/about/About";
import Teachers from "../screens/teachers/Teachers";
import DarkhasteMoshavere from "../screens/moshavere/darkhasteMoshavere";
import Login from "../screens/Login/Login";
import Register from "../screens/Register/Register";
import ForgetPass from "../screens/forgetPass/forgetPass";
import Course from "../screens/Course/Course";
import NotFound from "../screens/NotFound/NotFound";
import Maghalat from "../screens/blog/Maghalat";
import Maghale from "../screens/article/maghale";
import PanelAdmin from "../screens/panel-Admin/panelAdmin";
import Cart from "../screens/cart/Cart";

const Routing = () => {
    return (
        <>
            <main className="routing">
                <Switch>
                    <Route path="/" exact render={() => (<HomePage/>)}/>
                    <Route path="/courses" render={() => (<CoursesPage/>)}/>
                    <Route path={"/questions"} render={() => (<FAQ/>)}/>
                    <Route path={"/about"} render={() => (<About/>)}/>

                    <Route path={"/teachers"} render={() => (<Teachers/>)}/>
                    <Route path={"/request"} render={() => (<DarkhasteMoshavere/>)}/>
                    <Route path={"/login"} component={() => <Login/>}/>
                    <Route path={"/register"} component={() => <Register/>}/>
                    <Route path={"/forgetPassword"} component={() => <ForgetPass/>}/>
                    <Route path={"/course/:id"} render={() => (<Course/>)}/>
                    <Route path={"/not-found"} component={() => <NotFound/>}/>

                    <Route path="/blog" exact render={() => (<Maghalat/>)}/>
                    <Route path={"/blog/maghale/:id"} render={() => (<Maghale/>)}/>
                    <Route path={"/dashboard/:id"} component={() => <PanelAdmin/>}/>
                    <Route path={"/cart"} component={() => <Cart/>}/>
                    <Redirect to="/not-found"/>
                </Switch>
            </main>
        </>
    );
};

export default Routing;
