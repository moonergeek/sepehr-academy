import "./App.css";
import React from "react";
import AuthUser from "./authUser/authUser";
import CoursesProvider from "../core/services/Context/Courses/CoursesProvider";

const App = () => {
  return (
    <>
      <CoursesProvider value={{}}>
        <AuthUser />
      </CoursesProvider>
    </>
  );
};
export default App;
