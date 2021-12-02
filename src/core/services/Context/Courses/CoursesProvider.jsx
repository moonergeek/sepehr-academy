import React, { useState } from "react";
import MyContext from "./CoursesContext";

const CoursesProvider = ({ children }) => {
  return <MyContext.Provider>{children}</MyContext.Provider>;
};

export default CoursesProvider;
